// App.tsx
import React from 'react';
import Map from './components/Map.tsx';
import { useJsApiLoader } from "@react-google-maps/api";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: process.env.REACT_APP_GOOGLE_MAPS_ID,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  return (
    <div>
      <h1>Organ Procurement Organizations Map</h1>
      <Map isLoaded={isLoaded} />
    </div>
  );
}

export default App;
