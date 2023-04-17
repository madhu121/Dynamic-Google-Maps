
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { LoadScript } from '@react-google-maps/api/dist/dist.esm.js';
import React from 'react';
import { useState, useEffect } from 'react';

import data from '../opos.json';

interface LocationData {
  code: number;
  state: string;
  code2: string;
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

// const containerStyle = {
//   width: '100%',
//   height: '640px'
// };

// const center = {
//   lat: 37.7749,
//   lng: -122.4194
// };

// function Map() {
//   const [selected, setSelected] = useState<LocationData | null>(null);
//   const [locations, setLocations] = useState<LocationData[] | null>(null);

//   React.useEffect(() => {
//     setLocations(data);
//   }, []);
  
//   const onSelect = (location: LocationData) => {
//     setSelected(location);
//   };

//   const mapStyles = {
//     height: "100%",
//     width: "100%",
//   };
//   console.log(locations)
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCg1y7Kj5GKPlzcf2Hwo_S0LzNdMcP_Pxo">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={3}
//         options={{
//           streetViewControl: false,
//           fullscreenControl: false,
//           mapTypeControl: false,
//         }}
//       >
//         {locations && locations.map((location: LocationData) => (
//           <Marker
//             key={location.code}
//             position={{ lat: location.latitude, lng: location.longitude }}
//             onClick={() => onSelect(location)}
//           />
//         ))}
//         {selected && (
//           <InfoWindow
//             position={{ lat: selected.latitude, lng: selected.longitude }}
//             onCloseClick={() => setSelected(null)}
//           >
//             <div>
//               <h2>{selected.name}</h2>
//               <p>{selected.state}</p>
//             </div>
//           </InfoWindow>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// }


// export default Map;

// const Map = (props) => {
//   const { isLoaded } = props;
//   const containerStyle = {
//     width: '100%',
//     height: '640px'
//   };
//   const center = {
//     lat: 37.7749,
//     lng: -122.4194
//   };
//   return isLoaded && (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}

//     >
//       <Marker position = {center} />
//     </GoogleMap>
//   )
// }

// export default Map

const Map = (props) => {
  const { isLoaded } = props;
  const containerStyle = {
    width: '100%',
    height: '640px'
  };
  const center = {
    lat: 37.7749,
    lng: -122.4194
  };

  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = data.map(location => (
    <Marker
      key={location.code}
      position={{ lat: location.latitude, lng: location.longitude }}
      onClick={() => setSelectedMarker(location)}
      // You can customize the marker with additional props here
    />
  ));

  return isLoaded && (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={{
                  streetViewControl: false,
                  fullscreenControl: true,
                  mapTypeControl: false,
                }}
    >
      {markers}

      {selectedMarker && (
      <InfoWindow
        position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
        onCloseClick={() => setSelectedMarker(null)}
      >
        <div>
          <h3>{selectedMarker.name}</h3>
          <p>{selectedMarker.state}</p>
          <p>{selectedMarker.timezone}</p>
          {/* Add more information here as needed */}
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
};

export default Map;