//gives the distance between two cities using their latitude and longitude 
function distance (logitude1,latitude1,longitude2,latitude2){
    //Conversion to Radians
    logitude1 =  logitude1 * Math.PI / 180;
    longitude2 = longitude2 * Math.PI / 180;
    latitude1 = latitude1 * Math.PI / 180;
    latitude2 = latitude2 * Math.PI / 180;
   
    // Haversine formula
    let difflongitude = longitude2 - logitude1;
    let difflatitude = latitude2 - latitude1;
    let a = Math.pow(Math.sin(difflatitude / 2), 2) + Math.cos(latitude1) * Math.cos(latitude2) * Math.pow(Math.sin(difflongitude / 2),2);
    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. 
    let r = 6371;
   
    return(c * r);
}

//Choose a color between red and green given a distance, i.e, the closer the greener  
function getColor(distance) {
    const maxDistance = 7000
    var value = distance / maxDistance
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}

export{distance, getColor}