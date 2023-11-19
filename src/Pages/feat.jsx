import React from 'react';
import '../App.css'; 
import loc from "./imgs/loc.png"
import user from "./imgs/user.png"
import setting from "./imgs/setting.png"
import smart from "./imgs/smartloc.png"
import intutive from "./imgs/intivit.png"


import cloud from "./imgs/secure.png"

// // const AboutProject = () => {
// //     return (
// //         <div id="About" className="about-container">
// //             <h2>About the Project</h2>
// //             <p className="about-content">
// //                 Our geolocation application is designed to provide a seamless and intuitive way to manage location-based reminders and alerts. With a focus on user-friendly features, our app simplifies the process of setting and receiving location-specific notifications. Some key features include:
// //             </p>
// //             <ul className="feature-list">
// //                 <li>Geolocation-based alerts for timely reminders</li>
// //                 <li>Customizable settings for personalized notifications</li>
// //                 <li>Intuitive interface for effortless navigation and usage</li>
// //                 <li>Efficient handling of location-based data for smooth performance</li>
// //                 <li>Secure storage and management of user preferences and reminders</li>
// //             </ul>
// //         </div>
// //     );
// // };

// // export default AboutProject;

// // ... (previous imports)

// const Features = () => {
//     const features = [
//       {
//         title: 'Responsive Design',
//         description: 'Our website is designed to work seamlessly on various devices, providing a great user experience on desktops, tablets, and mobiles.',
//         imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3DResponsive%2Bweb%2Bdesign&psig=AOvVaw1L14CTBJmLlbe0bPizRqen&ust=1700486807260000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjfgpOV0IIDFQAAAAAdAAAAABAE',
//       },
//       {
//         title: 'User-friendly Interface',
//         description: 'Intuitive and easy-to-navigate interface to ensure that users can effortlessly explore and interact with the content.',
//         imgSrc: 'path/to/user-friendly-image.jpg',
//       },
//       {
//         title: 'Interactive Components',
//         description: 'Engage with interactive components and features that enhance user interaction and overall enjoyment of the site.',
//         imgSrc: 'path/to/interactive-image.jpg',
//       },
//       {
//         title: 'Geolocation-based alerts',
//         description: 'Receive timely reminders based on your current location.',
//         imgSrc: 'path/to/geolocation-alerts-image.jpg',
//       },
//       {
//         title: 'Customizable settings',
//         description: 'Personalize your notifications according to your preferences.',
//         imgSrc: 'path/to/customizable-settings-image.jpg',
//       },
//       // Add more features as needed
//     ];
  
//     const featureCardStyle = {
//       margin: '10px',
//       padding: '20px',
//       boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//       borderRadius: '10px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     };
  
//     const headingStyle = {
//       fontFamily: 'Arvo, sans-serif',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     };
  
//     return (
//       <div style={{ margin: '20px' }}>
//         <h2 style={headingStyle}>Website Features</h2>
//         <div className="row justify-content-center">
//           {features.map((feature, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card" style={featureCardStyle}>
//                 {feature.imgSrc && (
//                   <img
//                     src={feature.imgSrc}
//                     className="card-img-top"
//                     alt={`Feature ${index + 1}`}
//                     style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{feature.title}</h5>
//                   <p className="card-text">{feature.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Features;
  

// ... (previous imports)

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
      <div style={{ margin: '20px' }}>
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
  