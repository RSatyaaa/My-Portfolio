import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
    <div className="projects-section-title">
        <h3>My Projects</h3>
        <div className="projects-section">

            <div className="project">
                <h4>Interactive Dashboard for Distance Learning</h4>
                <p>
                    Developed an interactive dashboard using Java, Spring Boot, and Angular to facilitate remote learning for students. 
                    Ensured real-time data integration with a MySQL database, enhancing the accessibility and efficiency of educational content delivery. 
                    Automated repetitive tasks to improve productivity and deployed the application on a cloud platform for wider access.
                </p>
            </div>

            <div className="project">
                <h4>AI-Powered Chatbot for Educational Assistance</h4>
                <p>
                    Designed an AI-driven chatbot using Java, Spring Boot, and Angular to provide academic support for students, 
                    improving query resolution time by 40%. 
                    Integrated a database for real-time data retrieval and implemented NLP techniques to enhance chatbot responsiveness. 
                    The project enabled seamless interaction between students and educational resources.
                </p>
            </div>

        </div>
    </div>
</section>
  )
}

export default Projects
