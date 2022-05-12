import React from "react"
import BannerView from "../views/BannerView.js"
import Typography from "@mui/material/Typography"

export default function ProfileView(props) {
	return (
		<div align="center">
			<BannerView />
			<br />
			<Typography
				color="white"
				variant="h5"
				align="left"
				style={{ width: "50%" }}>
				Username: {props.currentUser.username}
			</Typography>
            <Typography
				color="white"
				variant="h5"
				align="left"
				style={{ width: "50%" }}>
				Games played: {props.currentUser.gamesPlayed}
			</Typography>
            <Typography
				color="white"
				variant="h5"
				align="left"
				style={{ width: "50%" }}>
				Wins: {props.currentUser.numberOfWins}
			</Typography>
            <Typography
				color="white"
				variant="h5"
				align="left"
				style={{ width: "50%" }}>
				Score (average number of remaining guesses when winning): {props.currentUser.numberOfWins !== 0 ? props.currentUser.score / props.currentUser.numberOfWins : 0}
			</Typography>
		</div>
	)
}