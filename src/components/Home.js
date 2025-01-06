import React from 'react';
import './Home.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon


function Home() {
  return (
    <section id="home" className="home">
      <div className='homepage'>
      <div className='photo'>
      <img src="/profile.jpeg" alt="Profile" />
      </div>
      <div className='content'> 
      <h1>Hi there,I'm <span className="highlight">Satya!</span></h1>
      
      <p className="tag">
  
            Full Stack Java Developer | Software Engineer</p>

      <p className='about-content'>
      Experienced Full Stack Java Developer with over 5 years of expertise in building scalable web applications, microservices, and RESTful APIs. Proficient in technologies like Java, Spring Boot, Angular, and cloud platforms such as AWS and Azure, with a proven track record of optimizing workflows and enhancing system efficiency. Passionate about solving complex challenges and delivering innovative, user-centric solutions.  </p>

      {/* Add buttons for profile and contact */}
      <div className="cta-buttons">
        <a href="#experience-view" className="btn know-me-btn">
        See My Work <FontAwesomeIcon icon={faArrowRight} /> {/* Arrow icon */}
        </a>
        {/* <a href="#contact-view" className="btn btn-secondary">Let's Chat</a> */}
      </div>
      </div>
      </div>



    </section>
  );
}

export default Home;

