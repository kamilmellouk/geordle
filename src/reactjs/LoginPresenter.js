import React from "react"
import LoginView from "../views/LoginView"
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebaseModel"

function Login(props) {
    const [loginEmail, setLoginEmail] = React.useState("")
    const [loginPassword, setLoginPassword] = React.useState("")

    const [ , setUser] = React.useState({})

    React.useEffect(() => {
        if(props.loggedIn) {
            window.location.hash = "#game"
        }
    },[props.loggedIn])

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })


    const login = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
                .then((p) => (window.location.hash = "#game"))
                .catch((e) => window.alert(e))
        } catch (error) {
            console.log(error.message)
        }
    }

    function setEmailACB(event) {
        setLoginEmail(event.target.value)
    }

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
