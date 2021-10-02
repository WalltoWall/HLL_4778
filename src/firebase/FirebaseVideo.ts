import {
	collection,
	CollectionReference,
	doc,
	getDoc,
	setDoc,
	getDocs,
} from "firebase/firestore/lite"
import { db } from "./infra"

interface FirebaseVideoData {
	votes: number
}

const ROOT_COLLECTION_NAME = "videos"

const videoCollection = collection(
	db,
	ROOT_COLLECTION_NAME
) as CollectionReference<FirebaseVideoData>

interface ConstructorArgs {
	votes?: number
	uid: string
	submissionType: string
}

export class FirebaseVideo {
	public votes: number
	public submissionType: string
	public uid: string

	constructor({ votes, uid, submissionType }: ConstructorArgs) {
		this.votes = votes ?? 0
		this.uid = uid
		this.submissionType = submissionType
	}

	async save(): Promise<boolean> {
		const docRef = doc<FirebaseVideoData>(
			videoCollection,
			"submissionTypes",
			this.submissionType,
			this.uid
		)

		try {
			await setDoc(docRef, { votes: this.votes })

			return true
		} catch {
			return false
		}
	}

	static async findMaybeOne(
		uid: string,
		submissionType: string
	): Promise<FirebaseVideo | undefined> {
		const docRef = doc<FirebaseVideoData>(
			videoCollection,
			"submissionTypes",
			submissionType,
			uid
		)

		const docSnap = await getDoc(docRef)

		if (!docSnap.exists()) return

		const data = docSnap.data()

		return new FirebaseVideo({ uid, votes: data.votes, submissionType })
	}

	static async findAllByType(submissionType: string): Promise<FirebaseVideo[]> {
		const submissionTypeCollection = collection(
			db,
			ROOT_COLLECTION_NAME,
			"submissionTypes",
			submissionType
		) as CollectionReference<FirebaseVideoData>

		const snapshot = await getDocs(submissionTypeCollection)

		return snapshot.docs.map((doc) => {
			const data = doc.data()

			return new FirebaseVideo({
				votes: data.votes,
				submissionType,
				uid: doc.id,
			})
		})
	}
}
