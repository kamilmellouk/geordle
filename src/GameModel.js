class GameModel {
    
    constructor() {
        this.nrOfGuesses = 8
        this.remainingGuesses = this.nrOfGuesses
        this.target = "Q60"
        this.guesses = [] // containts guess ids

        this.currentGuessPromiseState = {}
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
}

export default GameModel;