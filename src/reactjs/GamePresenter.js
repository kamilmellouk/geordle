import React from "react"

import GuessFormView from "../views/GuessFormView.js"
import GameBoardView from "../views/GameBoardView.js"
import MapView from "../views/MapView.js"
import BannerView from "../views/BannerView.js"

import useModelProperty from "./useModelProperty.js"

import known_cities from "../known_cities.js"
import { getCityDetails } from "../citySource.js"
import resolvePromise from "../resolvePromise.js"


export default function Game(props) {
    useModelProperty(props.model, "guesses")

    function addGuessACB() {
        if (!guessName) return
        const test_guess = {
            id: 10996,
            wikiDataId: "Q807",
            type: "CITY",
            city: "Lausanne",
            name: "Lausanne",
            country: "Switzerland",
            countryCode: "CH",
            region: "Canton of Vaud",
            regionCode: "VD",
            latitude: 46.533333333,
            longitude: 6.633333333,
            population: 139111,
        }

        function findIdFromNameCB(name) {
            return known_cities.find(c => c.name === name.split(",")[0]).id
        }

        // AAAAAAAA

        const guess = getCityDetails(findIdFromNameCB(guessName))
        console.log(guess.data)

        props.model.addGuess(test_guess)
    }

    const [guessName, setGuessName] = React.useState("");

    function setGuessNameACB(name) {
        console.log(name)
        setGuessName(name)
    }

    return (
        <div>
            <BannerView />
            <GuessFormView model={props.model} guessACB={addGuessACB} guessNameACB={setGuessNameACB} />
            <GameBoardView model={props.model} target={props.target} />
            <br />
            <MapView />
        </div>
    )
}
