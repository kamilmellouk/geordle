import { useState, useEffect } from "react"
import ProfileView from "../views/ProfileView"
import { getUserInfo } from "../firebaseModel"
import React from "react"

export default function Profile(props) {
    const [user, getUser] = useState([])
    console.log("hi")
    useEffect(async () => {
        getUser(await getUserInfo())
    }, [])

    return <ProfileView model={props.model} currentUser={user}></ProfileView>
}