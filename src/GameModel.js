import known_cities from "./known_cities.js"

import { getCityDetails } from "./citySource.js"

import resolvePromise from "./resolvePromise.js"

class GameModel {
    
    constructor() {
        this.nrOfGuesses = 8
        this.remainingGuesses = this.nrOfGuesses
        this.guesses = [] // contains city guesses
        this.currentGuessPromiseState = {}

        // this.targetPromiseState = {}
        this.target = null
        console.log("construct")
    // this.setNewTarget()
    }

    newGame() {
        // TODO: reset currentGuess, remainingGuesses and randomly choose target
        this.remainingGuesses = this.nrOfGuesses
        this.guesses = []
 
    }

    addGuess(city) {
        // TODO: when the user makes a guess, look for the correponding city id, and update the model parameters
        this.guesses = [...this.guesses, city]
        this.remainingGuesses -= 1
    }

    setNewTarget() {
        // .then((response) => {
        //     console.log("then", response)
        //     this.target = response.data
        // })
        resolvePromise(
            getCityDetails(known_cities.map(c => c.id)[Math.floor(Math.random() * known_cities.length)]), this.targetPromiseState, null
        )
    }

}


export default GameModel;