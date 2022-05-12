import { useState, useEffect } from "react"
import ProfileView from "../views/ProfileView"
import { getUserInfo } from "../firebaseModel"
import React from "react"

export default function Profile(props) {
	const [user, setUser] = useState(null)

	useEffect(() => {
		getUserInfo().then((data) => setUser(data))
	}, [])

	useEffect(() => {
		console.log(user)
	}, [user])

	if (!user) return null

	return <ProfileView model={props.model} currentUser={user}></ProfileView>
}