import React from "react"
import "./App.css"
import GameModel from "./GameModel.js"

import data from "./test_guesses.json"

import HelpView from "./views/HelpView"

import Game from "./reactjs/GamePresenter.js"

import Show from "./reactjs/show.js"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

import promiseNoData from "./views/promiseNoData.js"
import { getCityDetails } from "./citySource"

const theme = createTheme({
    palette: {
        primary: green,
        secondary: {
            main: '#66bb6a',
        },
    },
  });



const App = () => {
    // const [model, setModel] = React.useState(null)

    // React.useEffect(function onStartACB() {
    //     // console.log("hey")
    //     setModel(new GameModel())

    //     getCityDetails("Q1748")
    // }, [])
    // promiseNoData(model.targetPromiseState) ||
    
    const model = new GameModel()

    const [target, setTarget] = React.useState()
    React.useEffect(() => {
        getCityDetails("Q1748").then((c) => setTarget(c.data))
    }, [])

    return (
        
        <ThemeProvider theme={theme}>
            <div className="container" style={{}}>
                <Show hash="#game">
                    <Game model={model} guesses={data} target={target}/>
                </Show>
                <Show hash="#help">
                    <HelpView/>
                </Show>
            </div>
        </ThemeProvider>
    )
}

export default App