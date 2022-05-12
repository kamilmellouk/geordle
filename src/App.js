import React from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import HelpView from "./views/HelpView"
import Profile from "./reactjs/ProfilePresenter"

import Game from "./reactjs/GamePresenter.js"

import Show from "./reactjs/show.js"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { green } from "@mui/material/colors"

import Login from "./reactjs/LoginPresenter"
import Register from "./reactjs/RegisterPresenter.js"

import { auth } from "./firebaseModel.js"


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
        setIsLoggedIn(!!user)
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="container" style={{}}>
                {isLoggedin ? (
                    <div>
                        <Show hash="#game">
                            <Game model={model}/>
                        </Show>
                        <Show hash="#help">
                            <HelpView />
                        </Show>
                        <Show hash="#profile">
                            <Profile model={model} />
                        </Show>
                    </div>
                ) : (
                    <div>
                        {window.location.hash = "#login"}
                    </div>
                )
                }
                <Show hash="#login">
                    <Login model={model} />
                </Show>
                <Show hash="#register">
                    <Register model={model} />
                </Show>
            </div>
        </ThemeProvider>
    )
}

export default App