import React from "react"

import GuessFormView from "../views/GuessFormView.js"
import GameBoardView from "../views/GameBoardView.js"
import MapView from "../views/MapView.js"
import BannerView from "../views/BannerView.js"

import useModelProperty from "./useModelProperty.js"

import known_cities from "../known_cities.js"
import { getCityDetails } from "../citySource.js"

export default function Game(props) {
    useModelProperty(props.model, "guesses")

    async function setTarget() {
        const promise = await getCityDetails(
            known_cities.map((c) => c.id)[
                Math.floor(Math.random() * known_cities.length)
            ]
        )
        props.model.setTarget(promise.data)
    }

    React.useEffect(() => {
        setTarget()
    }, [])

    async function addGuessACB() {
        if (!guessName) return

        function findIdFromNameCB(name) {
            return known_cities.find((c) => c.name === name.split(",")[0]).id
        }

        const guess = await getCityDetails(findIdFromNameCB(guessName))
        props.model.addGuess(guess.data)
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
