
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