import React from "react"

import GuessFormView from "../views/GuessFormView.js"
import GameBoardView from "../views/GameBoardView.js"
import MapView from "../views/MapView.js"
import BannerView from "../views/BannerView.js"

import useModelProperty from "./useModelProperty.js"

export default function Game(props) {
    function helpACB() {
        window.location.hash = "#help"
    }

    useModelProperty(props.model, "guesses")

    function addGuessACB() {
        const test_guess =  {
            "id":10996,
            "wikiDataId":"Q807",
            "type":"CITY",
            "city":"Lausanne",
            "name":"Lausanne",
            "country":"Switzerland",
            "countryCode":"CH",
            "region":"Canton of Vaud",
            "regionCode":"VD",
            "latitude":46.533333333,
            "longitude":6.633333333,
            "population":139111
        }

        props.model.addGuess(test_guess)
    }

    return (
        <div>
            <BannerView/>
            <GuessFormView model={props.model} guessACB={addGuessACB}/>
            <GameBoardView model={props.model} target={props.target} />
            <br/>
            <MapView/>
        </div>
    )
}
