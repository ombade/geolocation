import React from 'react';
// import Navbar from './Components/Navbar';
import Map from './map';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { RangeSliderFilledTrack } from '@chakra-ui/react';

const Dash = ()=> {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Map />
    </div>
  );
}

export default Dash;
