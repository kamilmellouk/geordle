import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Login } from "@mui/icons-material"
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    doc,
    setDoc,
    orderBy,
    limit,
    updateDoc,
    increment,
    onSnapshot,
    arrayUnion,
    arrayRemove,
    addDoc,
    getDoc,
} from "firebase/firestore"

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code
//         const errorMessage = error.message
//         // ..
//     })
