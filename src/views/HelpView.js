import * as React from 'react';

import BannerView from "./BannerView"

import { Typography } from '@mui/material';

export default function HelpView() {


    return (
        <div align="center">
            <BannerView/>
            <Typography color="primary" variant="h2" align="center">
                Geordle, the city guessing game
            </Typography>
            <br/>
            <Typography color="white" variant="body1" align="center" style={{width: "50%"}}>
                The goal of this game is to find a mystery city using a limited
                number of guesses. Each new guess you make gives information on
                how the city you guessed compares to the one you need to find.
            </Typography>
        </div>

    )
}
