

import 'bootstrap/dist/css/bootstrap.min.css';
import { color } from '@chakra-ui/react';
import React, { useState } from 'react';

// const About = () => {
//   const [backgroundColor, setBackgroundColor] = useState('#f8f9fa'); // Initial background color

//   const handleThemeChange = (color) => {
//     setBackgroundColor(color);
//   };
const About = () => {
  const developers = [
    {
      name: 'Bade Om',
      linkedin: 'https://www.linkedin.com/in/om-bade/',
      github: 'https://github.com/ombade',
      imgSrc: 'https://media.licdn.com/dms/image/D4D03AQEpOuhexkvISQ/profile-displayphoto-shrink_800_800/0/1700621903566?e=1706140800&v=beta&t=oHy0TymYOsJqvZMXx0fInKegScolR_BAhw8FoiLNtXk',
      info: "B.tech (Computer)",
    },
    {
      name: 'Yash Agre',
      linkedin: 'linkedin.com',
      github: 'github.com',
      imgSrc: 'https://media.licdn.com/dms/image/D4D03AQFhXZXSfxM6Zg/profile-displayphoto-shrink_800_800/0/1697685374468?e=1703116800&v=beta&t=WHlBmjZWJmbU-nKsHVZ_4E95vqhJHQKdCbBTH_TnmmM',
      info: "B.tech (Computer)",
    },    {
      name: 'Dipika Dahifale',
      linkedin: 'https://www.linkedin.com/in/dipika-dahifale-17a277234/',
      github: 'github.com',
      imgSrc: 'https://media.licdn.com/dms/image/D5603AQF7OwbV5Khf2w/profile-displayphoto-shrink_800_800/0/1697713316694?e=1703116800&v=beta&t=kcXJZ8F3_zpNJ5Yf-ILa0Y6NBBEAgNrPLGkLCali7fE',
      info: "B.tech (Computer)",
    },    {
      name: 'Vidya Bombe',
      linkedin: 'https://www.linkedin.com/in/vidya-bombe-739b48296/',
      github: 'github.com',
      imgSrc: 'https://media.licdn.com/dms/image/D5603AQFHSVQ_5JwbRw/profile-displayphoto-shrink_800_800/0/1697640921754?e=1703116800&v=beta&t=hcwpjQ1vssvbYwL53vChLFt9spAkzvml7bDH4xwYLws',
      info: "B.tech (Computer)",
    },
  
  ];

  const guides = [
    {
      name: 'Prof. J. N. Kale',
      imgSrc: 'https://sanjivanicoe.org.in/media/k2/items/cache/aaa082d2257ab65aecf61c2340e9c5b9_S.jpg?t=20230517_080451',
      info: 'WEB Techology guide',
    },
    {
      name: 'Prof. Kiran .S. Katke',
      imgSrc: 'https://sanjivanicoe.org.in/media/k2/items/cache/71ab1197965a26d2e4379f8b23c36ebb_S.jpg',
      info: 'Computer Network Guide',
    },
    // Add information for other guides
  ];
  const [backgroundColor, setBackgroundColor] = useState('#f8f9fa');
  const cardStyle = {
      margin: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '10px',
    display: 'flex',
    background: 'rgb(255, 204, 204)',
   
    alignItems: 'center',
  };
  
  const cardStyle1 = {
    margin: '10px',
    
  padding: '20px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  borderRadius: '10px',
 backgroundcolor: 'rgb(255, 204, 204)',
 background: 'rgb(255, 204, 204)',
  display: 'flex',
 
  alignItems: 'center',
};
  const buttonStyle = {
    margin: '5px',
    fontSize: '16px',
  };
  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    // marginRight: '20px',
  };
  const headingStyle = {
    fontFamily: 'Arvo, sans-serif',
    fontWeight: 'bold',
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={headingStyle}>About Us</h2>
      <div className="row justify-content-center">
        <h3 style={headingStyle}>Guides</h3>
        {guides.map((guide, index) => (
          <div key={index} className="col-md-3">
            <div className="card" style={cardStyle}>
              <img src={guide.imgSrc} className="card-img-top" alt="guide" style={imgStyle} />
              <div className="card-body">
                <h5 className="card-title">{guide.name}</h5>
                <p className="card-text">{guide.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <h3 style={headingStyle}>Developers</h3>
        {developers.map((developer, index) => (
          <div key={index} className="col-md-3">
            <div className="card" style={cardStyle1 }>
              <img
                src={developer.imgSrc}
                className="card-img-top"
                alt="developer"
                style={imgStyle}
              />
              <div className="card-body">
                <h5 className="card-title">{developer.name}</h5>
                <p className="card-text">{developer.info}</p>
                <a
                  href={developer.linkedin}
                  className="btn btn-primary"
                  style={buttonStyle}
                >
                  LinkedIn
                </a>
                <a
                  href={developer.github}
                  className="btn btn-secondary"
                  style={buttonStyle}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
       
      </div>
    </div>
  );
        };  

export default About;
