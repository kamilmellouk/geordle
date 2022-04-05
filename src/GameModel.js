import {getCityDetails, getDistance} from "./citySource.js"
import resolvePromise from "./resolvePromise";

class GameModel {
    
    constructor() {
        this.nrOfGuesses = 8
        this.remainingGuesses = this.nrOfGuesses
        this.currentGuess = 0
        this.target = "Q60"
        this.guesses = [] // containts guess ids

        this.currentGuessPromiseState = {}
        function notifyACB() { console.log("thawa"); }
        console.log(resolvePromise(getCityDetails(this.target), this.currentGuessPromiseState, notifyACB))
    }

    newGame() {
        // TODO: reset currentGuess, remainingGuesses and randomly choose target
 
    }

    guess(name) {
        // TODO: when the user makes a guess, look for the correponding city id, and update the model parameters
    }

}

export default GameModel;