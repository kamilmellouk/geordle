import React from "react";

import GuessFormView from "../views/GuessFormView.js";
import GameBoardView from "../views/GameBoardView.js";

export default function Game(props) {

    function helpACB() {
        window.location.hash = "#help"
    }

    return (
        <div>
            <div class="banner">
                <div class="banner__content">
                    <div class="banner__text">Geordle</div>
                    <button class="banner__button" onClick={helpACB}>Help</button>
                </div>
            </div>
            <br />
            <GuessFormView model={props.model}/>,
            <br />
            <GameBoardView target={props.target} guesses={props.guesses}/>
            {props.target ? (
                <div>
                    <p> Mystery city:</p>
                    <p> City: {props.target.name} </p>
                    <p> Country: {props.target.country} </p>
                    <p> Population: {props.target.population} </p>
                    <p> Latitude: {props.target.latitude.toFixed(2)} </p>
                    <p> Longitude: {props.target.longitude.toFixed(2)} </p>
                </div>
            ) : (
                "no data"
            )}
        </div>
    );
}