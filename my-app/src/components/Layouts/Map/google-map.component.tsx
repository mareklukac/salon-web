import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define the default center and zoom level for the map
const defaultCenter = {
  lat: 48.715877532958984, // Latitude for New York City
  lng: 21.261817932128906, // Longitude for New York City
};

const defaultZoom = 17; // Initial zoom level

const GoogleMapsComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB2qkgM18IaHcqvwzpdbVAYTeSPwKlrDgE">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }} // Map container style
        center={defaultCenter}
        zoom={defaultZoom}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
