import React from "react"

import { Autocomplete, Box, Button, TextField } from "@mui/material"

import known_cities from "../known_cities"

export default function GuessFormView(props) {

    function guessACB() {
        props.guessACB()
    }

    function saveGuessNameACB(event, value) {
        props.guessNameACB(value)
    }

    function sortByCountryCB(a, b) {
        if (a.country < b.country) return -1;
        if (a.country > b.country) return 1;
        return 0;
    }

    const options = known_cities.sort(sortByCountryCB).map((c) => c.name + ", " + c.country)

    return (
        <div class="guessForm">
            <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ m: 2 }}
            >
                <Autocomplete
                    onChange={saveGuessNameACB}
                    style={{ color: "white" }}
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ input: { color: "white" }, width: 300, m: 2 }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                        },
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="City" />
                    )}
                />
                <Button
                    onClick={guessACB}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Guess
                </Button>
            </Box>
        </div>
    )
}
