import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()

export async function getUserInfo() {
    console.log("hi")
    const docRef = doc(db, "users", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        window.alert("siuu")
    }
}
