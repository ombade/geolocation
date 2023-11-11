import React from 'react';
import Typewriter from "typewriter-effect";
import '../App.css';

const HomePage = () => {
    return (
        <div className="home-container" id ="Home">
            <div className="typewriter-container">
                <h1 className="typewriter-text">                 			<Typewriter

options={{
  autoStart: true,
  loop: true,
}}
onInit={(typewriter) => {
  typewriter
    .typeString("GEOLOCATION")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Smart Alerts, Any Location")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Geo-Alert Your Way")
    .pauseFor(1000)
    .deleteAll()
    .start();
}}
/>
</h1>

            </div>
            {/* <div className="gif-container">
                <img className="responsive-gif" src="https://media4.giphy.com/media/JVvNVItg3I51n08Th2/200.gif?cid=6c09b952qm55q7z5ruzaxx0ma0mwqi9wuk2ag5yf7comnwzw&ep=v1_internal_gif_by_id&rid=200.gif&ct=g" alt="GIF" />
            </div> */}
        </div>
    );
};

export default HomePage;


