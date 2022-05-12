import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()

export async function getUserInfo() {
    const docRef = doc(db, "users", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    }
}

export async function setUserInfo(model) {
    const docRef = doc(db, "users", auth.currentUser.uid)

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        const wins = model.done && model.found ? docSnap.data().numberOfWins + 1 : docSnap.data().numberOfWins
        const played = model.done ? docSnap.data().gamesPlayed + 1 : docSnap.data().gamesPlayed
        const score = model.done ? docSnap.data().score + model.remainingGuesses : docSnap.data().score

        const status = (await updateDoc(docRef, {
            username: docSnap.data().username,
            gamesPlayed: played,
            numberOfWins: wins,
            score: score,
            }));
        
        if(!status.exists()) {
            console.log("error")
        }
    }

}