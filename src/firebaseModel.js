import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Login } from "@mui/icons-material"

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
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
