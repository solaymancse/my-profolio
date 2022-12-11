import React from 'react'
import { GoogleMap, LoadScript,Marker  } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 22.356852,
  lng: 91.783180
};

const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCCcVfQaivzEbuJbZDsTzJ-UM3gH30-AlQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker
      onLoad={onLoad}
      position={location}
    >
        </Marker>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);