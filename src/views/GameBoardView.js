
export default function GameBoardView(props) {


    return (
        <div id="game-board">
            { renderGuesses(props, props.guesses, props.target) }
        </div>
    );
}

function renderGuesses(props, guesses, target) {

    function guessRowCB(guess) {
        return (
            <tr key={guess.id}>
                <td> {guess.name} </td>
                <td> {guess.country} </td>
                <td> {guess.population} </td>
                <td> {guess.latitude.toFixed(4)} </td>
                <td> {guess.longitude.toFixed(4)} </td>
            </tr>
        );
    }

    return (
        <div>
            <table>
            <thead>
                <tr><th>Name</th><th>Country</th><th>Population</th><th>Latitude</th><th>Longitude</th></tr>
                </thead>
                <tbody>
                    { guesses.map(guessRowCB) }
                </tbody>
            </table>
        </div>
    );
}