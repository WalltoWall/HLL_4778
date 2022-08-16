import { initializeApp, FirebaseOptions } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyCzGV6VAnb9awgEoZp_f0wytSrsUSSkQcw",
	authDomain: "hll-votes.firebaseapp.com",
	projectId: "hll-votes",
	storageBucket: "hll-votes.appspot.com",
	messagingSenderId: "916583747616",
	appId: "1:916583747616:web:89671c4a042b2598abec45",
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
