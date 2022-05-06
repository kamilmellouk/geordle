import React from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import { getCityDetails } from "./citySource.js"
import data from "./test_guesses.json"

import HelpView from "./views/HelpView"

import Game from "./reactjs/GamePresenter.js"

import Show from "./reactjs/show.js"

const App = () => {
    const model = new GameModel()

    const [target, setTarget] = React.useState()
    React.useEffect(() => {
        getCityDetails("Q1748").then((c) => setTarget(c.data))
    }, [])

    return (
        <div className="container" style={{}}>
            <Show hash="#game">
                <Game model={model} guesses={data} target={target}/>
            </Show>
            <Show hash="#help">
                <HelpView/>
            </Show>
        </div>
    )
}

export default App