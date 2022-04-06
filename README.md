# Geordle - the city guessing game

  <p style="text-align:center">
    <a href="https://github.com/medkamilmel/geordle">Browse Code</a>
    ·
    <a href="https://github.com/medkamilmel/geordle/issues">Report Bug</a>
    ·
    <a href="https://github.com/medkamilmel/geordle/issues">Request Feature</a>
  </p>

## About the project

This project assignment was was implemented by group 5 for the course [DH2642 - Interaction Programming and the Dynamic Web](https://www.kth.se/student/kurser/kurs/DH2642?l=en) at [KTH Royal Institute of Technology](kth.se).

It consists of a city guessing game, somewhere between [Wordle](https://www.nytimes.com/games/wordle/index.html) and [GeoGuessr](https://www.geoguessr.com/): the user needs to find a mystery city using a limited number of guesses. Each new guess gives the player information on how the city he guessed compares to the one he needs to find.

Link to the deployed app: [geordle.web.app](geordle.web.app).

<p style="text-align:right">(<a href="#top">back to top</a>)</p>

## Built with
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [npm](https://www.npmjs.com/)
* [Firebase](https://firebase.google.com/)
* [GeoDB API](https://rapidapi.com/wirefreethought/api/geodb-cities)

<p style="text-align:right">(<a href="#top">back to top</a>)</p>

## What has been done

We intially started implementing the project using vue and reusing parts of the tutorial labs, but we quickly got lost in trying to make the dependencies work. We then decided to start from scratch and chose to use React. We set up the project skeleton using `create-react-app`.

The API config is done, and the calls are handled in `citySource.js`. We are limited in the frequency at which we can make API calls (see next section for more details), hence why the data for only one city is displayed on the website.

We built a first draft for `GameModel.js`.

The table listing guesses is implemented in `GameBoardView.js` and uses local data (`data.json`) for now.

The basic search form view/presenter pair is implemented in `GuessFormView.js` and `GuessFormPresenter.js`.

<p style="text-align:right">(<a href="#top">back to top</a>)</p>

## What's left to do

The free plan for the API we're using limits us to only 1'000 calls/day and 1 call/second which is really limiting, especially since we want to implement search suggestions which requires making many successive calls. We need to either subscribe to the premium plan or look for another API to use.

The `GameBoardView` needs to visually indicate how the guesses compare with the mystery city, with arrows/colors that change directions/shape depending on whether the city attribute is lower or higher than for the guess city.

We clearly need more relevant city attributes to display, e.g. time zone (to find in the API or to compute from coordinates)

The `GuessForm` needs to fetch the city information from the API and add it to the `GameModel`'s list of guesses, which has to then trigger the `GameBoard` (which needs a presenter) to re-render.

We should implement search suggestions in the `GuessForm` for a better user experience.

<p style="text-align:right">(<a href="#top">back to top</a>)</p>

## Contact

Mehdi Mezghani - [mezghani@kth.se](mailto:mezghani@kth.se)

Thomas Srour - [srour@kth.se](mailto:srour@kth.se)

Kamil Mellouk - [mellouk@kth.se](mailto:mellouk@kth.se)

<p style="text-align:right">(<a href="#top">back to top</a>)</p>