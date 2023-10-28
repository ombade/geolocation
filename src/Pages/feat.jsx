import React from 'react';
import '../App.css'; 

const AboutProject = () => {
    return (
        <div className="about-container">
            <h2>About the Project</h2>
            <p className="about-content">
                Our geolocation application is designed to provide a seamless and intuitive way to manage location-based reminders and alerts. With a focus on user-friendly features, our app simplifies the process of setting and receiving location-specific notifications. Some key features include:
            </p>
            <ul className="feature-list">
                <li>Geolocation-based alerts for timely reminders</li>
                <li>Customizable settings for personalized notifications</li>
                <li>Intuitive interface for effortless navigation and usage</li>
                <li>Efficient handling of location-based data for smooth performance</li>
                <li>Secure storage and management of user preferences and reminders</li>
            </ul>
        </div>
    );
};

export default AboutProject;
