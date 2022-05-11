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
            {/* <AppBar>
                <div class="banner__content">
                    <div class="banner__text">Geordle</div>
                    <button class="banner__button" onClick={helpACB}>
                        Help
                    </button>
                </div>
            </AppBar> */}
            <BannerView></BannerView>
            <br />
            <GuessFormView model={props.model} />
            <br />
            <GameBoardView target={props.target} guesses={props.guesses} />
            <br />
            <MapView />
        </div>
    )
}
