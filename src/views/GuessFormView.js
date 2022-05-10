import React from "react"

import { Autocomplete, Box, Button, TextField } from "@mui/material"

import known_cities from "../known_cities"

export default function GuessFormView(props) {

    function guessACB() {
        console.log(known_cities)
    }

    const options = known_cities.map(c => c.name + ", " + c.country)

    return (
        <div class="guessForm">
            
            <Box m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{m: 2}}  >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300, m:2 }}
                    renderInput={(params) => <TextField {...params} label="City" />}
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
