import React from "react"

import GuessFormView from "../views/GuessFormView.js"
import GameBoardView from "../views/GameBoardView.js"
import MapView from "../views/MapView.js"
import BannerView from "../views/BannerView.js"

export default function Game(props) {
    function helpACB() {
        window.location.hash = "#help"
    }

    return (
        <div>
            <BannerView/>
            <GuessFormView model={props.model} />
            <GameBoardView target={props.target} guesses={props.guesses} />
            <MapView/>
        </div>
    )
}
