import known_cities from "./known_cities.js"

import { getCityDetails } from "./citySource.js"

import resolvePromise from "./resolvePromise.js"

class GameModel {
    
    constructor() {
        this.observers = []

        this.nrOfGuesses = 8
        this.remainingGuesses = this.nrOfGuesses
        this.guesses = [] // contains city guesses
        this.currentGuessPromiseState = {}

        // this.targetPromiseState = {}
        this.target = null
    }

    newGame() {
        // TODO: reset currentGuess, remainingGuesses and randomly choose target
        this.remainingGuesses = this.nrOfGuesses
        this.guesses = []
 
    }

    addGuess(city) {
        function isCityInGuessesCB(c){
            return c.id === city.id;
        }

        if (this.remainingGuesses > 0 && !this.guesses.find(isCityInGuessesCB)) {
            this.guesses = [...this.guesses, city]
            this.remainingGuesses -= 1
            this.notifyObservers({addedGuess: city})
        }
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
    





    
    addObserver(callback) {
        this.observers.push(callback);
    }

    removeObserver(callback) {
        function searchCB(obs){
            return obs !== callback;
        }

        this.observers = this.observers.filter(searchCB);
    }

    notifyObservers(payload) {
        function invokeObserverCB(obs) {
            try {
                obs(payload);
            } catch (err) {
                console.log(err);
            }
        }

        this.observers.forEach(invokeObserverCB);
    }

}


export default GameModel;