import React from "react"

import { distance, getColor, maxDiffLongLat, maxDistance, maxDiffPop } from "../utilities"

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
                class="guessestd"
                style={{
                    backgroundColor: color,
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
                    class="guessestd"
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
                {numericalProperty(
                    guess.latitude.toFixed(2),
                    props.model.target === undefined
                        ? props.model.target
                        : props.model.target.latitude.toFixed(2),
                    "↑",
                    "↓",
                    getColor(
                        guess.latitude -
                            (props.model.target === undefined
                                ? props.model.target
                                : props.model.target.latitude.toFixed(2)),
                        maxDiffLongLat
                    )
                )}
                {numericalProperty(
                    guess.longitude.toFixed(2),
                    props.model.target === undefined
                        ? props.model.target
                        : props.model.target.longitude.toFixed(2),
                    "→",
                    "←",
                    getColor(
                        guess.longitude -
                            (props.model.target === undefined
                                ? props.model.target
                                : props.model.target.longitude.toFixed(2)),
                        maxDiffLongLat
                    )
                )}
                <StyledTableCell
                    class="guessestd"
                    style={{ backgroundColor: getColor(dist, maxDistance) }}
                >
                    {" "}
                    {dist}
                    {"  km"}
                </StyledTableCell>
            </StyledTableRow>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>City</StyledTableCell>
                        <StyledTableCell align="right">Country</StyledTableCell>
                        <StyledTableCell align="right">Population</StyledTableCell>
                        <StyledTableCell align="right">Latitude</StyledTableCell>
                        <StyledTableCell align="right">Longitude</StyledTableCell>
                        <StyledTableCell align="right">Distance to target</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {   
                        props.model.guesses.map(guessRowCB)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}