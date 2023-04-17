// App.tsx
import React from 'react';
import Map from './components/Map.tsx';
import { useJsApiLoader } from "@react-google-maps/api";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyCg1y7Kj5GKPlzcf2Hwo_S0LzNdMcP_Pxo",
    googleMapsApiKey: "AIzaSyCg1y7Kj5GKPlzcf2Hwo_S0LzNdMcP_Pxo",
  })
  return (
    <div>
      <h1>Organ Procurement Organizations Map</h1>
      <Map isLoaded={isLoaded} />
    </div>
  );
}

export default App;
