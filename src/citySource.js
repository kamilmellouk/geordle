import {BASE_URL, API_KEY} from "./apiConfig.js";

function  APICall(endpoint, params) {
    function treatHTTPResponseACB(response) {
        if (response.status !== 200) {
            throw Error("API Problem");
        }
        return response.json();
    }

    return fetch(BASE_URL + endpoint + params, {  // object literal
        "method": "GET",              // HTTP method
        "headers": {                  // HTTP headers, also object literal
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            "X-RapidAPI-Key": API_KEY,
        }
    }
    ).then(treatHTTPResponseACB);
}

function getCityDetails(id) {
    return APICall(
        "cities/", 
        id
    );
}

function getCityByName(name) {
    return APICall(
        "cities?namePrefix=",
        name + "&sort=-population"
    )
}

function getDistance(fromId, toId) {
    return APICall(
        "cities/",
        toId + "/distance?fromCityId="+ fromId + "&distanceUnit=KM"
    );
}

export {getCityDetails, getCityByName, getDistance};