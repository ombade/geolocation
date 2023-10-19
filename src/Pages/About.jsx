// import React from "react";


// const About = () => {
//   return (
//     <div id="About" style={{height:"800px"}}>
//       <h1 style={{fontSize:"50px",padding:"20%"}}>
//         About
//       </h1>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      imgSrc: 'https://media.licdn.com/dms/image/D5603AQFmy03W-OGJ4w/profile-displayphoto-shrink_400_400/0/1669616262271?e=1703116800&v=beta&t=TtyK8liv8pk0Eabvept8zeD2LLtynK9aj64gYDeRZMA',
      info: 'A dedicated, observant, and passionate learner, always eager togain hands-on experience and explore new domains throughvarious platforms, online and offline.',
    },
    {
      name: 'Yash Agre',
      linkedin: 'linkedin.com',
      github: 'github.com',
      imgSrc: 'https://media.licdn.com/dms/image/D4D03AQFhXZXSfxM6Zg/profile-displayphoto-shrink_800_800/0/1697685374468?e=1703116800&v=beta&t=WHlBmjZWJmbU-nKsHVZ_4E95vqhJHQKdCbBTH_TnmmM',
      info: 'Short info about Developer 1',
    },    {
      name: 'Dipika Dahifale',
      linkedin: 'https://www.linkedin.com/in/dipika-dahifale-17a277234/',
      github: 'github.com',
      imgSrc: 'https://media.licdn.com/dms/image/D5603AQF7OwbV5Khf2w/profile-displayphoto-shrink_800_800/0/1697713316694?e=1703116800&v=beta&t=kcXJZ8F3_zpNJ5Yf-ILa0Y6NBBEAgNrPLGkLCali7fE',
      info: 'Short info about Developer 1',
    },    {
      name: 'Developer 1',
      linkedin: 'https://www.linkedin.com/in/vidya-bombe-739b48296/',
      github: 'github.com',
      imgSrc: 'https://media.licdn.com/dms/image/D5603AQFHSVQ_5JwbRw/profile-displayphoto-shrink_800_800/0/1697640921754?e=1703116800&v=beta&t=hcwpjQ1vssvbYwL53vChLFt9spAkzvml7bDH4xwYLws',
      info: 'Short info about Developer 1',
    },
    // Add information for other developers
  ];

  const guides = [
    {
      name: 'Prof. J. N. Kale',
      imgSrc: 'https://sanjivanicoe.org.in/media/k2/items/cache/aaa082d2257ab65aecf61c2340e9c5b9_S.jpg?t=20230517_080451',
      info: 'Short info about Guide 1',
    },
    {
      name: 'Prof. Kiran .S. Katke',
      imgSrc: 'https://sanjivanicoe.org.in/media/k2/items/cache/71ab1197965a26d2e4379f8b23c36ebb_S.jpg',
      info: 'Short info about Guide 1',
    },
    // Add information for other guides
  ];

  const cardStyle = {
      margin: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  };
  const cardStyle1 = {
    margin: '10px',
  padding: '20px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  borderRadius: '10px',
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
        <h3 style={headingStyle}>Project Info</h3>
        <p>Short info about the project.</p>
      </div>
    </div>
  );
        };  

export default About;
