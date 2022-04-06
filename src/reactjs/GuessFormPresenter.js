import React from "react";

import GuessFormView from "../views/GuessFormView.js";
import { getCityByName } from "../citySource.js";


export default function GuessForm(props) {
    const [searchText, setSearchText] = React.useState("");
    function setSearchTextACB(text) {
        setSearchText(text);
    }

    // const [promise, setPromise] = React.useState(function initializePromiseCB(){
    //     return getCityByName(searchText);
    // });

    // function searchACB() {
    //     setPromise(getCityByName(searchText));
    // }

    // const [name, setName] = useState()
    // useEffect(() => {
    //   getCityByName('Casablanca').then(c => setName(c.data[0]))
    // }, [])
  
    // useEffect(() => {
    //   console.log(name)
    // }, [name])


    return (
        <GuessFormView
            setSearchText={setSearchTextACB}
            // search={searchACB}
        />
    );
}