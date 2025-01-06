import React from 'react';
import './About.css'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon



const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* Image from the public folder */}
          <img src="/profile.jpeg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          Experienced Full Stack Java Developer with over 5 years of expertise in building scalable web applications, microservices, and RESTful APIs. Proficient in technologies like Java, Spring Boot, Angular, and cloud platforms such as AWS and Azure, with a proven track record of optimizing workflows and enhancing system efficiency. Passionate about solving complex challenges and delivering innovative, user-centric solutions.
          </p>
          <div className="button">
            <a href="#experience-view">See My Work<FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
        
      </div>
      
    </section>
    
    
  );
};

export default About;
