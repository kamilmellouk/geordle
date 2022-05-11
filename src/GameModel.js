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

        this.targetPromiseState = {}
        this.target = null
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
        resolvePromise(
            getCityDetails(known_cities.map(c => c.id)[Math.floor(Math.random() * known_cities.length)]), this.targetPromiseState, null
        )

        this.target = this.targetPromiseState.data
    }

    setTarget(target) {
        this.target = target
    }
    
    resetGame() {
        this.observers = []

        this.nrOfGuesses = 8
        this.remainingGuesses = this.nrOfGuesses
        this.guesses = [] 
        this.currentGuessPromiseState = {}

        // Todo: get random target
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