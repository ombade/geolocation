import React from 'react';
import '../App.css'; 
import loc from "./imgs/loc.png"
import user from "./imgs/user.png"
import setting from "./imgs/setting.png"
import smart from "./imgs/smartloc.png"
import intutive from "./imgs/intivit.png"


import cloud from "./imgs/secure.png"
const Features = () => {
    const features = [
      {
        title: 'Geolocation-based alerts',
        description: 'Receive timely reminders based on your current location.q',
        imgSrc: loc,
      },
      {
        title: 'Customizable settings',
        description: 'Personalize your notifications according to your preferences.',
        imgSrc: setting,
      },
      {
        title: 'Intuitive interface',
        description: 'Effortless navigation and usage with a user-friendly interface.',
        imgSrc: intutive,
      },
      {
        title: 'Efficient handling of location-based data',
        description: 'Smooth performance through efficient management of location-based information.',
        imgSrc: smart,
      },
      {
        title: 'Secure storage and management',
        description: 'Ensuring the secure storage and management of user preferences and reminders.',
        imgSrc: cloud,
      },
            {
        title: 'User-friendly Interface',
        description: 'Intuitive and easy-to-navigate interface to ensure that users can effortlessly explore and interact with the content.',
        imgSrc: user,
      },
      // Add more features as needed
    ];
  
    const featureCardStyle = {
      margin: '10px',
      background: '#edbee69c',
      padding: '20px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.3s ease-in-out',
      cursor: 'pointer',
      
      ':hover': {
        transform: 'scale(1.05)',
      },
    };
  
    const imgStyle = {
      width: '100px',
      height: '100px', 
      borderRadius: '0px',
      objectFit: 'cover',
    
    };
  
    const headingStyle = {
      
      fontWeight: 'bold',
      fontfamily: 'Rubik,sans-serif',
    scrollbehavior: 'smooth',
    
      textAlign: 'center',
    };
  
    return (
      <div id='About' style={{ margin: '20px' }}>
        <h2 style={headingStyle}>App Features</h2>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ transition: 'transform 0.3s ease-in-out' }}
            >
              <div className="card" style={featureCardStyle}>
                {feature.imgSrc && (
                  <img
                    src={feature.imgSrc}
                    className="card-img-top"
                    alt={`Feature ${index + 1}`}
                    style={imgStyle}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;
  