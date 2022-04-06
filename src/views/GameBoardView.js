export default function GameBoardView(props) {
    return (
        <div id="game-board">
            {renderGuesses(props, props.guesses, props.target)}
        </div>
    )
}

function renderGuesses(props, guesses, target) {
    function guessRowCB(guess) {
        return (
            <tr class="guessestr" key={guess.id}>
                <td class="guessestdname"> {guess.name} </td>
                <td class="guessestd"> {guess.country} </td>
                <td class="guessestd"> {guess.population} </td>
                <td class="guessestd"> {guess.latitude.toFixed(2)} </td>
                <td class="guessestd"> {guess.longitude.toFixed(2)} </td>
            </tr>
        )
    }

    return (
        <div>
            <table class="guesses">
                <thead>
                    <tr>
                        <th class="guessesthname">Name</th>
                        <th class="guessesth">Country</th>
                        <th class="guessesth">Population</th>
                        <th class="guessesth">Latitude</th>
                        <th class="guessesth">Longitude</th>
                    </tr>
                </thead>
                <tbody>{guesses.map(guessRowCB)}</tbody>
            </table>
        </div>
    )
}
