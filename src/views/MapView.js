import React from "react"
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MAP_KEY } from "../apiConfig";

const containerStyle = {
    position: "relative ",
    width: '100%',
    height: '500px'
  };
  
export default function MapView(props) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_KEY
    })
    
    const [ , setMap] = React.useState(null)
    
    const onUnmount = React.useCallback(function callback(map) { setMap(null) }, [])

    const mapRef = React.useRef(null);
    const [position, setPosition] = React.useState({
      lat: 0, 
      lng: 	0
    });


  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  function cityCircleACB(c) {
    const center = {lat: c.latitude, lng: c.longitude}
    return (
      <Marker position={center} key={c.wikiDataId}/>
    )
  }

  return isLoaded ? (
      
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={position}
        zoom={2}
        id="map"
        onDragEnd={handleCenter}
        onLoad={handleLoad}
        onUnmount={onUnmount}
    >
        { props.model.guesses.map(cityCircleACB)}
        <></>
    </GoogleMap>      
  ) : <></>

}