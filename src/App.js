import React from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import HelpView from "./views/HelpView"
import Profile from "./reactjs/ProfilePresenter"

import Game from "./reactjs/GamePresenter.js"

import Show from "./reactjs/show.js"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { green } from "@mui/material/colors"

import { getCityDetails } from "./citySource"
import Login from "./reactjs/LoginPresenter"
import Register from "./reactjs/RegisterPresenter.js"

import { auth } from "./firebaseModel.js"

import known_cities from "./known_cities"

import navigation from "./views/navigation"

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: green,
        secondary: {
            main: green[500],
        },
    },
})

const App = () => {
    if(!navigation) return

    const model = new GameModel()

    const [isLoggedin, setIsLoggedIn] = React.useState(false)
    auth.onAuthStateChanged(function (user) {
       console.log("heyhey")
        setIsLoggedIn(!!user)
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="container" style={{}}>
                <Show hash="#game">
                    {isLoggedin ? (
                        <Game model={model}/>
                    ) : (
                        <p>You have to log in</p>
                    )}
                </Show>
                <Show hash="#help">
                    <HelpView />
                </Show>
                <Show hash="#login">
                    <Login model={model} />
                </Show>
                <Show hash="#register">
                    <Register model={model} />
                </Show>
                <Show hash="#profile">
                    {isLoggedin ? (
                        <Profile model={model} />
                    ) : (
                        <p>You have to log in</p>
                    )}
                </Show>
            </div>
        </ThemeProvider>
    )
}

export default App