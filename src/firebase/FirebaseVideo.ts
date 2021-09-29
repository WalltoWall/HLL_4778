import {
	collection,
	CollectionReference,
	doc,
	getDoc,
	setDoc,
} from "firebase/firestore/lite"
import { db } from "./infra"

interface FirebaseVideoData {
	votes: number
}

const videoCollection = collection(
	db,
	"videos"
) as CollectionReference<FirebaseVideoData>

export class FirebaseVideo {
	public votes: number
	private uid: string

	constructor({ votes, uid }: { votes?: number; uid: string }) {
		this.votes = votes ?? 0
		this.uid = uid
	}

	async save(): Promise<boolean> {
		const docRef = doc<FirebaseVideoData>(videoCollection, this.uid)

		try {
			await setDoc(docRef, { votes: this.votes })

			return true
		} catch {
			return false
		}
	}

	static async findMaybeOne(uid: string): Promise<FirebaseVideo | undefined> {
		const docRef = doc<FirebaseVideoData>(videoCollection, uid)
		const docSnap = await getDoc(docRef)

		if (!docSnap.exists()) return

		const data = docSnap.data()

		return new FirebaseVideo({ uid, votes: data.votes })
	}
}
