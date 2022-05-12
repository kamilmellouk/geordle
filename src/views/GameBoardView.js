import React from "react"

import { distance, getColor, maxDistance, maxDiffPop } from "../utilities"

import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { Container, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: 'center',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      textAlign: 'center',
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function GameBoardView(props) {
    function numericalProperty(
        guessProperty,
        targetProperty,
        higherSymbol,
        lowerSymbol,
        color
    ) {
        return (
            <td
                style={{
                    backgroundColor: color,
                    textAlign: "center"
                }}
            >
                {" "}
                <span
                    style={
                        props.model.target === undefined
                            ? { color: "black" }
                            : guessProperty <= targetProperty
                            ? { color: "black" }
                            : { color: "black" }
                    }
                >
                    {props.model.target === undefined
                        ? "."
                        : guessProperty <= targetProperty
                        ? higherSymbol
                        : lowerSymbol}
                </span>{" "}
                <span>
                    {guessProperty.toLocaleString(
                        undefined // leave undefined to use the visitor's browser
                        // locale or a string like 'en-US' to override it.
                    )}{" "}
                </span>
            </td>
        )
    }

    function guessRowCB(guess) {
        if (!guess) return
        var direction = ""
        if (guess.latitude < props.model.target.latitude) {
            direction += "N"
        } else {
            direction += "S"
        }

        if (guess.longitude < props.model.target.longitude) {
            direction += "E"
        } else {
            direction += "W"
        }

        var dist = distance(
            guess.longitude,
            guess.latitude,
            props.model.target === undefined ? 0 : props.model.target.longitude,
            props.model.target === undefined ? 0 : props.model.target.latitude
        ).toFixed(0)

        return (
            <StyledTableRow key={guess.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <StyledTableCell component="th" scope="row"> {guess.name} </StyledTableCell>
                <StyledTableCell
                    style={
                        props.model.target === undefined
                            ? { color: "black" }
                            : guess.country === props.model.target.country
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "red" }
                    }
                >
                    {" "}
                    {guess.country}{" "}
                </StyledTableCell>
                {numericalProperty(
                    guess.population,
                    props.model.target === undefined
                        ? props.model.target
                        : props.model.target.population,
                    "↑",
                    "↓",
                    getColor(
                        guess.population -
                            (props.model.target === undefined
                                ? props.model.target
                                : props.model.target.population),
                        maxDiffPop
                    )
                )}
                <StyledTableCell style={{ backgroundColor: getColor(dist, maxDistance) }}>
                    {" " + dist + " km"}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {guess.wikiDataId !== props.model.target.wikiDataId? direction : ""}
                </StyledTableCell>
            </StyledTableRow>
        )
    }

    return (
        <Container>
            <Typography color="primary" variant="body1" align="center">Remaining guesses: {props.model.remainingGuesses}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>City</StyledTableCell>
                            <StyledTableCell justify="center">Country</StyledTableCell>
                            <StyledTableCell justify="center">Population</StyledTableCell>
                            <StyledTableCell justify="center">Distance to target</StyledTableCell>
                            <StyledTableCell justify="center>">Direction to target</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {   
                            props.model.guesses.map(guessRowCB)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}