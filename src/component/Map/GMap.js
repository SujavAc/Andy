import React, { useEffect, useRef } from 'react';
 
const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;
 
  useEffect(() => {
    googleMap = initGoogleMap();
    createMarker();
  }, []);
 
 
  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -33.90963  , lng: 151.05664 },
      zoom: 12
    });
  }
 
  // create marker on google map
  const createMarker = () => new window.google.maps.Marker({
    position: { lat: -33.8721405, lng: 151.0931589 },
    map: googleMap
  });
 
  return <div
    ref={googleMapRef}
    style={{ width: 'auto', height: 500 }}
  />
}
 
export default GMap;