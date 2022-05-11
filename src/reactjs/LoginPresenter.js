import { useState, useEffect } from "react"
import LoginView from "../views/LoginView"
import React from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth"
import { auth } from "../firebaseModel"
//import { loginWithFirebase } from "../firebaseModel"

function Login(props) {
    // const [registerEmail, setRegisterEmail] = useState("")
    // const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    // const register = async () => {
    //     try {
    //         const user = await createUserWithEmailAndPassword(
    //             auth,
    //             registerEmail,
    //             registerPassword
    //         )
    //         console.log(user)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    function setEmailACB(event) {
        setLoginEmail(event.target.value)
    }

    // function setEmailACB(event) {
    //     setRegisterEmail(event.target.value)
    // }

    function setPasswordACB(event) {
        setLoginPassword(event.target.value)
    }

    return (
        <LoginView
            model={props.model}
            setEmail={setEmailACB}
            setPwd={setPasswordACB}
            login={login}
        />
    )
}

export default Login
