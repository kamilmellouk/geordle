import React from "react"
import { GoogleMap, Circle, Marker, useJsApiLoader } from '@react-google-maps/api';
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
    
    const [map, setMap] = React.useState(null)
    
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
    const options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: 3000000000000000000,
      zIndex: 1
    }
    return (
      <Marker position={center}/>
    //   <Circle
    //   // optional
    //   // onLoad={onLoad}
    //   // optional
    //   onUnmount={onUnmount}
    //   // required
    //   center={center}
    //   // required
    //   options={options}
    // />
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