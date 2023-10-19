// import React from "react";


// const Contact = () => {
//   return (
//     <div id="Contact" style={{height:"800px"}}>
//       <h1 style={{fontSize:"50px",padding:"20%"}}>
//         Contact
//       </h1>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const { name, email, message } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your submission logic here
//     console.log(formData);
//     // Reset the form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="container">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email Address:</label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Message:</label>
//           <textarea
//             className="form-control"
//             name="message"
//             value={message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log(formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  const cardStyle = {
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '50px',
    padding: '40px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    backgroundColor: 'white',
    borderRadius: '10px',
  };

  const backgroundStyle = {
    backgroundImage: `url('https://via.placeholder.com/1500')`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea
              className="form-control"
              name="message"
              value={message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
