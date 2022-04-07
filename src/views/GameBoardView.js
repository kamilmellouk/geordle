import { distance, getColor} from "../utilities"

export default function GameBoardView(props) {
    return (
        <div id="game-board">
            {renderGuesses(props, props.guesses, props.target)}
        </div>
    )
}

function renderGuesses(props, guesses, target) {

    function numericalProperty (guessProperty, targetProperty, higherSymbol, lowerSymbol) {
        return (
           <td class="guessestd">  <span  style= {target== undefined ?  {color: 'black'} : guessProperty<=targetProperty? { color: 'green' }: { color: 'red' }}>
                {target== undefined ?  "." : guessProperty<=targetProperty? higherSymbol: lowerSymbol}</span> <span>{guessProperty} </span></td>
        )
    }

    
    function guessRowCB(guess) {
        var dist = distance(guess.longitude, guess.latitude, target== undefined? 0 :target.longitude, target== undefined? 0 :target.latitude ).toFixed(0)
        return (
            <tr class="guessestr" key={guess.id}>
                <td class="guessestdname" > {guess.name} </td>
                <td class="guessesDist" style= {target== undefined ?  {color: 'black'} : guess.country===target.country? { backgroundColor: 'green' }: { backgroundColor: 'red' }}> {guess.country} </td>
                {numericalProperty(guess.population, target== undefined? target :target.population, "↑", "↓")}
                {numericalProperty(guess.latitude.toFixed(2), target== undefined? target :target.latitude.toFixed(2), "↑", "↓")}
                {numericalProperty(guess.longitude.toFixed(2), target== undefined? target :target.longitude.toFixed(2), "→", "←")}
                <td class="guessesDist"  style={{backgroundColor : getColor(dist)}}> {dist} </td>
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
                        <th class="guessesth">Distance</th>
                    </tr>
                </thead>
                <tbody>{guesses.map(guessRowCB)}</tbody>
            </table>
        </div>
    )
}
