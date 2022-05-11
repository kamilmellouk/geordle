import { useState, useEffect } from "react"
import React from "react"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebaseModel"
import RegisterView from "../views/RegisterView"
//import { loginWithFirebase } from "../firebaseModel"

function Register(props) {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log(user)
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

    return (
        <RegisterView
            model={props.model}
            setEmail={setEmailACB}
            setPwd={setPasswordACB}
            register={register}
        />
    )
}

export default Register
