import { useState, useEffect } from "react"
import React from "react"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth"
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
import { auth, db } from "../firebaseModel"
import RegisterView from "../views/RegisterView"
import { ResetTvOutlined } from "@mui/icons-material"
//import { loginWithFirebase } from "../firebaseModel"

function Register(props) {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerUsername, setRegisterUsername] = useState("")

    const [user, setUser] = useState({})

    async function checkValidUser(name) {
        const q = query(collection(db, "users"), where("username", "==", name))
        const res = await getDocs(q)
        console.log("hi")
        return res.size
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            ).then((cred) => {
                return db
                    .collection("users")
                    .doc(cred.user.uid)
                    .set({ usermame: registerUsername })
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    function setEmailACB(event) {
        setRegisterEmail(event.target.value)
    }

    function setPasswordACB(event) {
        setRegisterPassword(event.target.value)
    }

    function setUsernameACB(event) {
        setRegisterUsername(event.target.value)
    }

    return (
        <RegisterView
            model={props.model}
            setEmail={setEmailACB}
            setPwd={setPasswordACB}
            setUsername={setUsernameACB}
            register={register}
        />
    )
}

export default Register
