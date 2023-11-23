import React, { useState } from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import support from "./imgs/suppot.gif"
const notify = () => toast("Wow so easy!");


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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://salmon-painter-hkkrg.pwskills.app:5000/submit_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Message Send Successfull, will contact you Soon", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        console.log('Form data successfully submitted to the backend.');
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to submit form data to the backend.');
        toast.error('Failed to submit form data to the backend.', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    } catch (error) {
      console.error('An error occurred while submitting form data:', error);
      toast.error('An error occurred while submitting form data:', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  

  const [backgroundColor, setBackgroundColor] = useState('#f8f9fa');
  const cardStyle = {
    maxWidth: '1000px',
    margin: '90px',
    height: '500px',
    width :'390px',
    marginTop: '50px',
    padding: '40px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    backgroundColor: '#ffac9d',
    borderRadius: '10px',
  };

  const backgroundStyle = {
   
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    // backgroundColor:"#1a202c",
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div id='Contact' style={backgroundStyle}>
          <div className="gif-container" style={backgroundStyle}>
                <img className="responsive-gif" src={support} alt="GIF" />
            </div>
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
     
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
