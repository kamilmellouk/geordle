import React from "react"

export default function HelpView(props) {
    
    function gameACB() {
        window.location.hash = "#game"
    }

    return (
        <div>
            <div class="header">
                <h1 style={{ color: "blue" }}>Geordle</h1>
                <p style={{ color: "green" }}>The city guessing game</p>
            </div>
            <div class="body">
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </div>
            <button onClick={gameACB}>Back to the game</button>
        </div>
    )
}
