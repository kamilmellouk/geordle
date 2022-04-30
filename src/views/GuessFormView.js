import React, { useEffect, useState } from "react"
import * as known_cities from "../known_cities.json"
import data from "../data"

export default function GuessForm(props) {
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
		console.log(cities)
		setFilteredCities(
			cities.filter((city) =>
				city.toLowerCase().includes(input.toLowerCase())
			)
		)
	}, [input])

    return (
        <div class="center">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={guessACB}>Guess</button>
            <div class="suggestions">
				{filteredCities.map((city) => (
					<div>{city}</div>
				))}
			</div>
        </div>
    )
}
