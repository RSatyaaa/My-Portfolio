import React from 'react'
import './Projects.css'


function Experience() {
  return (
    <section id="projects" className="projects">

    <div className="projects-section-title">
        <h3>Professional Experience</h3>
        <div className="projects-section">

            <div className="project">
                <h4>Full Stack Java Developer - SimpliSolve LLC
                    <img 
                      src={`${process.env.PUBLIC_URL}/Simplisolve.jpg`} 
                      alt="SimpliSolve Logo" 
                      className="small-logo" 
                    />
                </h4>
                <p><strong>Aug 2024 – Present</strong></p>
                <p>
                    Designed and developed RESTful APIs using Java and Spring Boot, increasing financial data processing efficiency by 30%.
                    Built interactive dashboards with Angular for real-time analytics, enhancing usability for financial reporting.
                    Implemented scalable microservices architecture, reducing system downtime by 40%.
                    Automated ETL workflows using Spring Batch and Alteryx to streamline data pipelines.
                    Optimized database queries with PostgreSQL, improving performance by 25%.
                    Deployed applications using Jenkins and Docker, ensuring seamless CI/CD processes.
                    Collaborated with cross-functional teams to deliver high-quality solutions on time.
                </p>
            </div>

            <div className="project">
                <h4>Full Stack Java Developer - KTech Products
                    <img 
                      src={`${process.env.PUBLIC_URL}/Ktech.jpg`}
                      className="small-logo" 
                    />
                </h4>
                <p><strong>Jun 2023 – Aug 2024</strong></p>
                <p>
                    Developed an AI-driven chatbot using Java, Spring Boot, and Angular, reducing query handling time by 40%.
                    Designed performance dashboards using Angular and Power BI to improve decision-making processes.
                    Automated deployment pipelines with Jenkins and Docker for streamlined workflows.
                    Refined ETL processes using PostgreSQL and Alteryx, enhancing data accuracy by 20%.
                    Enhanced security features by implementing protocols like OAuth2 for secure authentication.
                    Documented system designs and implementation strategies for knowledge sharing.
                </p>
            </div>

            <div className="project">
                <h4>Java Developer - Quant Systems
                    <img 
                      src={`${process.env.PUBLIC_URL}/QuantSystems.png`}
                      alt="Quant Systems Logo" 
                      className="small-logo" 
                    />
                </h4>
                <p><strong>Aug 2022 – May 2023</strong></p>
                <p>
                    Engineered a cloud-native inventory management system using AWS services, reducing infrastructure costs by 25%.
                    Developed an AI-driven recommendation engine, improving personalized user experiences by 35%.
                    Built a batch processing system using Spring Batch for large-scale data imports and exports.
                    Designed GraphQL APIs for efficient data querying, enhancing collaboration between frontend and backend teams.
                    Integrated predictive analytics into backend systems using Python and Flask for real-time insights.
                    Automated compliance workflows, reducing processing time by 50%.
                </p>
            </div>

            <div className="project">
                <h4>Associate Software Engineer - Accenture Solutions Private Limited
                    <img 
                      src={`${process.env.PUBLIC_URL}/Accenture.png`}
                      alt="Accenture Logo" 
                      className="small-logo" 
                    />
                </h4>
                <p><strong>Jan 2021 – Jul 2022</strong></p>
                <p>
                    Developed backend services using Java and Spring Boot, enhancing system performance and reducing latency by 20%.
                    Created RESTful APIs and implemented caching mechanisms to improve scalability and API response times.
                    Designed and deployed microservices architecture, increasing deployment efficiency by 30%.
                    Executed testing automation using Selenium and TestNG, improving test coverage by 50%.
                    Diagnosed and resolved bugs using Azure DevOps, improving application usability by 15%.
                    Optimized MySQL databases for secure and efficient data retrieval processes.
                </p>
            </div>

            <div className="project">
                <h4>Full Stack Developer Intern - Software Engineering Research Center IIIT
                    <img 
                      src={`${process.env.PUBLIC_URL}/SERC.png`} 
                      alt="IIIT Logo" 
                      className="small-logo" 
                    />
                </h4>
                <p><strong>Aug 2019 – Dec 2020</strong></p>
                <p>
                    Developed an interactive dashboard for distance learning using Java, Spring Boot, and Angular, ensuring real-time data integration.
                    Designed secure and efficient backend services to support dashboard functionalities.
                    Optimized MySQL database solutions, improving data retrieval efficiency by 20%.
                    Automated repetitive development and deployment tasks for enhanced productivity.
                    Deployed applications on cloud platforms for greater accessibility.
                </p>
            </div>

            <div className="project">
                <h4>Junior Software Engineer Intern - Smartbridge
                    <img 
                      src={`${process.env.PUBLIC_URL}/smartbridge.png`} 
                      alt="Smartbridge Logo" 
                      className="small-logo" 
                    />
                </h4>
                <p><strong>Jan 2019 – Aug 2019</strong></p>
                <p>
                    Designed and implemented a customer feedback analysis tool using Java and Angular, improving sentiment analysis accuracy by 25%.
                    Conducted research and implemented NoSQL solutions using MongoDB for handling unstructured data.
                    Built a multi-tenant user authentication system, ensuring secure and isolated user environments.
                    Integrated payment gateway APIs to enable secure online transactions within a client application.
                    Developed custom logging and monitoring systems for tracking application performance in real-time.
                </p>
            </div>

        </div>
    </div>

</section>

  )
}

export default Experience
