import React, { useEffect, useState } from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import { getCityDetails, getCityByName, getDistance } from "./citySource.js"
import resolvePromise from "./resolvePromise"
import data from "./data.json"

import GameBoardView from "./views/GameBoardView"

import GuessForm from "./reactjs/GuessFormPresenter"

const App = () => {
    const model = new GameModel()

    const [target, setTarget] = useState()
    useEffect(() => {
        getCityDetails("Q504125").then((c) => setTarget(c.data))
    }, [])

    return (
        <div className="container" style={{}}>
            {target ? (
                <div>
                    <p> Mystery city:</p>
                    <p> City: {target.name} </p>
                    <p> Country: {target.country} </p>
                    <p> Population: {target.population} </p>
                    <p> Latitude: {target.latitude.toFixed(2)} </p>
                    <p> Longitude: {target.longitude.toFixed(2)} </p>
                </div>
            ) : "no data"}
            <GuessForm model={model} />
            <br />
            <br />
            <GameBoardView guesses={data} target={target} />
        </div>
    )
}

export default App
