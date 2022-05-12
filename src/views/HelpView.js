import * as React from 'react';

import BannerView from "./BannerView"
import GameModel from "../GameModel.js"

import { Typography } from '@mui/material';
import GameBoardView from './GameBoardView';
import MapView from './MapView';

export default function HelpView() {

    const model = new GameModel()

    model.setTarget({
        "id":3020322,
        "wikiDataId":"Q1754",
        "type":"CITY",
        "city":"Stockholm",
        "name":"Stockholm",
        "country":"Sweden",
        "countryCode":"SE",
        "region":"Stockholm County",
        "regionCode":"AB",
        "latitude":59.329444444,
        "longitude":18.068611111,
        "population":975819
    })

    model.addGuess({
        "id":153701,
        "wikiDataId":"Q7903",
        "type":"CITY",
        "city":"Casablanca",
        "name":"Casablanca",
        "country":"Morocco",
        "countryCode":"MA",
        "region":"Casablanca-Settat",
        "regionCode":"06",
        "latitude":33.599166666,
        "longitude":-7.62,
        "population":3499000
    })

    model.addGuess( {
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
    })

    model.addGuess({
        "id":106179,
        "wikiDataId":"Q25287",
        "type":"CITY",
        "city":"Gothenburg",
        "name":"Gothenburg",
        "country":"Sweden",
        "countryCode":"SE",
        "region":"Västra Götaland County",
        "regionCode":"O",
        "latitude":57.671706102,
        "longitude":11.980966694,
        "population":604829
    })

    return (
        <div align="center">
            <BannerView/>
            <br/>
            <Typography color="white" variant="body1" align="center" style={{width: "60%"}}>
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </Typography>
            <Typography color="white" variant="body1" align="center" style={{width: "60%"}}>
                Below is an example of game state.
                The first city a player would guess guess is usually random, and gives you a vague idea of where to look.
                By guessing Gothenburg, the user finds that it is in the same country as the mystery city, and gains more information on the direction and distance.
                With knowing that the population of the mystery city is greater than that of Gothenburg, you can easily come to the conclusion that the city to find is Stockholm.
            </Typography>
            <GameBoardView model={model}/>
            <MapView model={model}/>
        </div>

    )
}