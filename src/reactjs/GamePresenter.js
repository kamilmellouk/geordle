import React from "react"

import GuessFormView from "../views/GuessFormView.js"
import GameBoardView from "../views/GameBoardView.js"
import MapView from "../views/MapView.js"
import BannerView from "../views/BannerView.js"

import useModelProperty from "./useModelProperty.js"

import known_cities from "../known_cities.js"
import { getCityDetails, getTime } from "../citySource.js"
import resolvePromise from "../resolvePromise.js"

export default function Game(props) {
    useModelProperty(props.model, "guesses")

    async function addGuessACB() {
        if (!guessName) return

        function findIdFromNameCB(name) {
            return known_cities.find((c) => c.name === name.split(",")[0]).id
        }
        const id = findIdFromNameCB(guessName)
        const cityData = await getCityDetails(id)
        const utcOffset = await getTime(id)
        
        const guess = cityData
        cityData.hour = Number.parseInt(utcOffset.data.split(":")[0])

        props.model.addGuess(guess)
    }

    const [guessName, setGuessName] = React.useState("")
    function setGuessNameACB(name) {
        setGuessName(name)
    }

    return (
        <div>
            <BannerView />
            <GuessFormView
                model={props.model}
                guessACB={addGuessACB}
                guessNameACB={setGuessNameACB}
            />
            <GameBoardView model={props.model} />
            <br />
            <MapView model={props.model} />
        </div>
    )
}
