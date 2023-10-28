import React, { useState, useEffect } from 'react';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [capturedCoordinates, setCapturedCoordinates] = useState(null);

  const updateCoordinates = (lat, lng) => {
    const coordinates = { latitude: lat, longitude: lng };
    setCapturedCoordinates(coordinates);
    if (marker) {
      marker.setPosition(new window.google.maps.LatLng(lat, lng));
    }
  };

  const showLoc = (pos) => {
    const latt = pos.coords.latitude;
    const long = pos.coords.longitude;
    const lattlong = new window.google.maps.LatLng(latt, long);
    updateCoordinates(latt, long);
    if (map) {
      map.setCenter(lattlong);
      if (marker) {
        marker.setPosition(lattlong);
      }
    }
  };

  const errHand = (err) => {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        alert("The application doesn't have permission to use location services.");
        break;
      case err.POSITION_UNAVAILABLE:
        alert("The location of the device is uncertain.");
        break;
      case err.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case err.UNKNOWN_ERROR:
        alert(
          "Time to fetch location information exceeded the maximum timeout interval."
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const initializeMap = () => {
      const lattlong = new window.google.maps.LatLng(0, 0);
      const options = {
        center: lattlong,
        zoom: 10,
        mapTypeControl: true,
        navigationControlOptions: {
          style: window.google.maps.NavigationControlStyle.SMALL,
        },
      };
      const mapInstance = new window.google.maps.Map(
        document.getElementById("demo2"),
        options
      );
      const markerInstance = new window.google.maps.Marker({
        position: lattlong,
        map: mapInstance,
        title: "Location",
        draggable: true,
      });
      setMap(mapInstance);
      setMarker(markerInstance);

      window.google.maps.event.addListener(mapInstance, "click", function (event) {
        const clickedLocation = event.latLng;
        updateCoordinates(clickedLocation.lat(), clickedLocation.lng());
      });
    };

    initializeMap();
  }, []);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLoc, errHand);
    }
  };

  return (
    <div>
      <div className="h1">Choose Location</div>
      <h1>Hello</h1>
      <p>Display and Capture Location on Map</p>

      <button className="main" type="button" onClick={handleGetLocation}>
        Current Position
      </button>
      <div id="demo2" style={{ width: '500px', height: '500px' }}></div>
      <p>Click on the map to capture coordinates:</p>
      <div id="capturedCoordinates">
        {capturedCoordinates && (
          <div>
            Clicked Coordinates: Latitude {capturedCoordinates.latitude}, Longitude{' '}
            {capturedCoordinates.longitude}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
