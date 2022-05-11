import React from "react"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth"
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    setDoc,
} from "firebase/firestore"
import { auth, db } from "../firebaseModel"
import RegisterView from "../views/RegisterView"

function Register(props) {
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [registerUsername, setRegisterUsername] = React.useState("")

    const [ , setUser] = React.useState({})

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
                .then((cred) => {
                    return setDoc(doc(db, "users", cred.user.uid), {
                        username: registerUsername,
                        score: 0,
                        gamesPlayed: 0,
                        numberOfWins: 0,
                    })
                })
                .then((p) => (window.location.hash = "#game"))
                .catch((e) => window.alert(e))
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
