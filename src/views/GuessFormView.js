export default function GuessForm(props) {
    function inputACB(event) {
        props.setSearchText(event.target.value)
    }
    function guessACB() {
        console.log("guess")
    }

    return (
        <div class="center">
            <input onChange={inputACB} value={props.searchText}  />
            <button onClick={guessACB}>Guess</button>
        </div>
    )
}
