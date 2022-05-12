# Geordle - the city guessing game

  <p align="center">
    <a href="https://github.com/medkamilmel/geordle">Browse Code</a>
    ·
    <a href="https://github.com/medkamilmel/geordle/issues">Report Bug</a>
    ·
    <a href="https://github.com/medkamilmel/geordle/issues">Request Feature</a>
  </p>

## About the project

This project assignment was was implemented by group 5 for the course [DH2642 - Interaction Programming and the Dynamic Web](https://www.kth.se/student/kurser/kurs/DH2642?l=en) at [KTH Royal Institute of Technology](kth.se).

It consists of a city guessing game, somewhere between [Wordle](https://www.nytimes.com/games/wordle/index.html) and [GeoGuessr](https://www.geoguessr.com/): the user needs to find a mystery city using a limited number of guesses. Each new guess gives the player information on how the city he guessed compares to the one he needs to find.

Link to the deployed app: [geordle.web.app](https://www.geordle.web.app) (type it directly in your browser if you cannot access the website through this link).

<p align="right">(<a href="#top">back to top</a>)</p>

## Built with
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [MUI](https://mui.com/)
* [npm](https://www.npmjs.com/)
* [Firebase](https://firebase.google.com/)
* [GeoDB API](https://rapidapi.com/wirefreethought/api/geodb-cities)
* [GoogleMaps API](https://react-google-maps-api-docs.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Setup

To clone the repository
```
git clone https://github.com/medkamilmel/geordle
```

To install npm
```
npm install
```

To run the server locally, automatically opening the web page
```
npm run start
```
Note: You need the `apiConfig.js` file for the API keys, contact us if you need them.

To deploy the web app to [geordle.web.app](geordle.web.app)
```
npm run build
firebase deploy
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Project structure

* `App.js` handles the main page.
* `GameModel.js` models an instance of the game.
* `citySource.js` provides functions that make API calls.
* `utilities.js` provides some utility functions.
* `data.json` contains local city data (initially fetched from the API) used for prototyping.
* `views/` contains views for the game board and the guess form.
* `reactjs/` contains the presenter for the game board.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Mehdi Mezghani - [mezghani@kth.se](mailto:mezghani@kth.se)

Thomas Srour - [srour@kth.se](mailto:srour@kth.se)

Kamil Mellouk - [mellouk@kth.se](mailto:mellouk@kth.se)

<p align="right">(<a href="#top">back to top</a>)</p>