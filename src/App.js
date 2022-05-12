import React from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import HelpView from "./views/HelpView"
import ProfileView from "./views/ProfileView"

import Game from "./reactjs/GamePresenter.js"

import Show from "./reactjs/show.js"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { green } from "@mui/material/colors"

import { getCityDetails } from "./citySource"
import Login from "./reactjs/LoginPresenter"
import Register from "./reactjs/RegisterPresenter.js"

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

    async function setTarget() {
        const promise = await getCityDetails(
            known_cities.map((c) => c.id)[
                Math.floor(Math.random() * known_cities.length)
            ]
        )
        model.setTarget(promise.data)
    }

    React.useEffect(() => {
        setTarget()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div className="container" style={{}}>
                <Show hash="#game">
                    <Game model={model} target={model.target} />
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
                    <ProfileView />
                </Show>
            </div>
        </ThemeProvider>
    )
}

export default App
