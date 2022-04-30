import React from "react";

import GuessFormView from "../views/GuessFormView.js";
import { getCityByName } from "../citySource.js";


export default function GuessForm(props) {
    const [searchText, setSearchText] = React.useState("");
    function setSearchTextACB(text) {
        setSearchText(text);
    }

    return (
        <GuessFormView
            setSearchText={setSearchTextACB}
        />
    );
}