import React from "react"

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MAP_KEY } from "../apiConfig";

const containerStyle = {
    align: 'center',
    width: '1000px',
    height: '500px'
  };
   
  const center = {
    lat: -3.745,
    lng: -38.523
  };

export default function MapView(props) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_KEY
    })
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
  ) : <></>

}