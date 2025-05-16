import React, { useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const defaultCenter = { lat: 48.70800791328133, lng: 21.244844667487474 };
const defaultZoom = 17;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const GoogleMapsComponent: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );
  const mapDivRef = useRef<HTMLDivElement>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBQtKvza3QtIuThIxlsmAhJ8IGxm0Ys9yk",
    libraries: ["marker"],
  });

  useEffect(() => {
    if (isLoaded && mapDivRef.current && !mapRef.current) {
      mapRef.current = new google.maps.Map(mapDivRef.current, {
        center: defaultCenter,
        zoom: defaultZoom,
        mapId: "916afe64cb68037e94809fe7",
      });

      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position: defaultCenter,
        map: mapRef.current,
        title: "Maya Beauty Salon",
      });
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
        markerRef.current = null;
      }
      mapRef.current = null;
    };
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return <div ref={mapDivRef} style={containerStyle} />;
};

export default GoogleMapsComponent;
