import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function HelpView(props) {
    
    function gameACB() {
        window.location.hash = "#game"
    }

    return (
        <div>
            <div class="header">
                <h1 style={{ color: "blue" }}>Geordle</h1>
                <p style={{ color: "green" }}>The city guessing game</p>
            </div>
            <div class="body" style={{ color: "white" }}>
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </div>
            <Box textAlign='center'>
                <Button
                onClick={gameACB} 
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Back to the game 
                </Button>   
            </Box>
            
        </div>
    )
}
