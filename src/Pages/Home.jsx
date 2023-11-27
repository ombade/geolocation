
import React from 'react';
import Typewriter from 'typewriter-effect';
import currentLocationSvg from './imgs/Current location (2).gif';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-container" id="Home">
      <div className="typewriter-container">
        <h1 style={{
          whiteSpace: 'nowrap',
          fontSize: "5vw", 
          fontFamily: "Rubik, sans-serif",
          color: "#ff745c",
          lineHeight: 1
        }}>Remember with</h1>

        <h1 className="typewriter-text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('LOCATION')
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(1000)
                .deleteAll()
                .typeString('GEO-ALERT')
                .pauseFor(1000)
                .deleteAll()
                .typeString('GEOLOCATION')
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h1>

        <h1 style={{
          whiteSpace: 'nowrap',
          fontSize: "3vw", // Responsive font size using viewport width
          fontFamily: "Rubik, sans-serif",
          color: "#E8e6E3",
          lineHeight: 1,
          textAlign: "center",
          margin: "0",
          padding: "10px",
        }}>Stay Aware, Anywhere:<br />Your Personal Location Companion.</h1>
      </div>

      <div className="gif-container">
        <img className="responsive-gif" src={currentLocationSvg} alt="GIF" />
      </div>
    </div>
  );
};

export default HomePage;

