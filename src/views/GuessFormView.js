export default function GuessForm(props) {

    function inputACB(event) {
        props.setSearchText(event.target.value)
    }
    function guessACB() {
        console.log("guess")
    }

    return (
        <div>
            <input onChange={inputACB}/>
            <button onClick={guessACB}>Guess</button>
        </div>
    );
}