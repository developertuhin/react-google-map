import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css'

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 23.707310,
  lng: 90.415482
};

function Map() {
  return (
    <div className="google-map">
        <LoadScript 
      googleMapsApiKey="AIzaSyA0WJMCMWyQfTlGIwt3tg7qAI7kEw9jmxY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(Map)