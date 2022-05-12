import known_cities from "./known_cities.js"

import { getCityDetails } from "./citySource.js"

import resolvePromise from "./resolvePromise.js"

import {setUserInfo} from "./firebaseModel.js"

class GameModel {
    
    constructor() {
        this.observers = []

        this.nrOfGuesses = 3
        this.remainingGuesses = this.nrOfGuesses
        this.guesses = [] // contains city guesses
        this.currentGuessPromiseState = {}

        this.targetPromiseState = {}
        this.target = null

        this.found = false
        this.done = false
    }

    addGuess(city) {
        if (this.remainingGuesses > 0) {
            this.remainingGuesses -= 1
            this.guesses = [...this.guesses, city]
            this.notifyObservers({addedGuess: city})

            if(this.target && (this.target.wikiDataId === city.wikiDataId)) {
                this.found = true
                this.done = true
            }
        } else {
            if(!this.target) return
            if (this.target && (this.target.wikiDataId !== city.wikiDataId)) {
                this.done = true
            }
        }

        if(this.done) {
            setUserInfo(this).then(() => {})
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