import React, { useEffect, useState } from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import { getCityDetails } from "./citySource.js"
import data from "./data.json"

import GameBoardView from "./views/GameBoardView"

import GuessForm from "./reactjs/GuessFormPresenter"

const App = () => {
    const model = new GameModel()

    const [target, setTarget] = useState()
    useEffect(() => {
        getCityDetails("Q1748").then((c) => setTarget(c.data))
    }, [])

    const [cities, setCities] = useState([])

	const [input, setInput] = useState("")

	const [filteredCities, setFilteredCities] = useState([])

	// const [target, setTarget] = useState()
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
				"X-RapidAPI-Key":
					"4876c15595msh603eeebf11a00d2p1c8d4bjsn98cd6343a628",
			},
		}

		fetch(
			"https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&minPopulation=2000000",
			options
		)
			.then((response) => response.json())
			.then((response) => {
				const cities = response.data
				console.log(response)
				setCities(cities.map((c) => c.name))
			})
			.catch((err) => console.error(err))
	}, [])

	useEffect(() => {
		console.log(cities)
	}, [cities])

	useEffect(() => {
		console.log(cities)
		setFilteredCities(
			cities.filter((city) =>
				city.toLowerCase().includes(input.toLowerCase())
			)
		)
	}, [input])

    return (
        <div className="container" style={{}}>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
			<div>
				{filteredCities.map((city) => (
					<div>{city}</div>
				))}
			</div>
            <div class="header">
                <h1 style={{ color: "blue" }}>Geordle</h1>
                <p style={{ color: "green" }}>The city guessing game</p>
            </div>
            <div class="body">
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </div>
            <br />
            <GuessForm model={model} />
            <br />
            <GameBoardView guesses={data} target={target} />
            {target ? (
                <div>
                    <p> Mystery city:</p>
                    <p> City: {target.name} </p>
                    <p> Country: {target.country} </p>
                    <p> Population: {target.population} </p>
                    <p> Latitude: {target.latitude.toFixed(2)} </p>
                    <p> Longitude: {target.longitude.toFixed(2)} </p>
                </div>
            ) : (
                "no data"
            )}
        </div>
    )
}

export default App