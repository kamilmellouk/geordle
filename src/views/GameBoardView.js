import { distance, getColor, getColorPop, getColorLonLat } from "../utilities"

export default function GameBoardView(props) {
    return <div id="game-board">{renderGuesses(props)}</div>
}

const maxDistance = 7000
const maxDiffLongLat = 7
const maxDiffPop = 1000000

function renderGuesses(props) {
    function numericalProperty(
        guessProperty,
        targetProperty,
        higherSymbol,
        lowerSymbol,
        color
    ) {
        return (
            <td
                class="guessestd"
                style={{
                    backgroundColor: color,
                }}
            >
                {" "}
                <span
                    style={
                        props.target == undefined
                            ? { color: "black" }
                            : guessProperty <= targetProperty
                            ? { color: "black" }
                            : { color: "black" }
                    }
                >
                    {props.target == undefined
                        ? "."
                        : guessProperty <= targetProperty
                        ? higherSymbol
                        : lowerSymbol}
                </span>{" "}
                <span>{guessProperty} </span>
            </td>
        )
    }

    
    function guessRowCB(guess) {
        var dist = distance(
            guess.longitude,
            guess.latitude,
            props.target == undefined ? 0 : props.target.longitude,
            props.target == undefined ? 0 : props.target.latitude
        ).toFixed(0)

        return (
            <tr class="guessestr" key={guess.id}>
                <td class="guessestdname"> {guess.name} </td>
                <td
                    class="guessestd"
                    style={
                        props.target == undefined
                            ? { color: "black" }
                            : guess.country === props.target.country
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "red" }
                    }
                >
                    {" "}
                    {guess.country}{" "}
                </td>
                {numericalProperty(
                    guess.population,
                    props.target == undefined
                        ? props.target
                        : props.target.population,
                    "↑",
                    "↓",
                    getColor(guess.population -
                        ( props.target == undefined
                            ? props.target
                            : props.target.population), maxDiffPop)

                )}
                {numericalProperty(
                    guess.latitude.toFixed(2),
                    props.target == undefined
                        ? props.target
                        : props.target.latitude.toFixed(2),
                    "↑",
                    "↓",
                    getColor(
                        guess.latitude -
                        (props.target == undefined
                        ? props.target
                        : props.target.latitude.toFixed(2)), maxDiffLongLat
                    )
                )}
                {numericalProperty(
                    guess.longitude.toFixed(2),
                    props.target == undefined
                        ? props.target
                        : props.target.longitude.toFixed(2),
                    "→",
                    "←",
                    getColor(
                        guess.longitude -
                        (props.target == undefined
                        ? props.target
                        : props.target.longitude.toFixed(2)), maxDiffLongLat
                    )
                )}
                <td
                    class="guessestd"
                    style={{ backgroundColor: getColor(dist, maxDistance) }}
                >
                    {" "}
                    {dist}
                    {"  km"}
                </td>
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
                <tbody>{props.guesses.map(guessRowCB)}</tbody>
            </table>
        </div>
    )
}
