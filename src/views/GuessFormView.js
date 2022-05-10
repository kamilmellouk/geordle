import React, { useEffect, useState } from "react"
import * as known_cities from "../known_cities.json"
import data from "../data"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'

export default function GuessFormView(props) {
    function guessACB() {
        console.log(known_cities)
    }

    const [cities, setCities] = useState([])
	const [input, setInput] = useState("")
	const [filteredCities, setFilteredCities] = useState([])

    useEffect(() => {
		setCities(data.map(c => c.name + ", " + c.country))
	}, [])

	useEffect(() => {
		setFilteredCities(
			cities.filter((city) =>
				city.toLowerCase().includes(input.toLowerCase())
			)
		)
	}, [input])

    return (
        <div class="guessForm">
            
            <Box m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{m: 2}}  >
                <Input sx={{ width: 300, m:2 }}  variant="contained" label="Outlined secondary" value={input} onChange={(e) => setInput(e.target.value)} />           
                <Button 
                    onClick={guessACB} 
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Guess
                </Button>     
            </Box>
            <div class="suggestions">
				{filteredCities.map((city) => (
					<div>{city}</div>
				))}
			</div>
        </div>
    )
}
