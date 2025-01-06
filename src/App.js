import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Home from './components/Home';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';


function App() {
  return (
    // <Router>
    <div className="App">
      <main>
     <Header />
     
     {/* <Routes> */}
        {/* <Route path="/" element={<Home />}></Route> */}

        <section id="home-view">
        <Home />
        </section>
        {/* <section id="about-view">
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <About /> */}
        {/* </section> */} 

        <section id="experience-view">
        {/* <Route path="/Experience" element={<Experience />}></Route> */}
        <Experience />
        </section>
       
        <section id="projects-view">
        {/* <Route path="/Projects" element={<Projects />}></Route> */}
        <Projects />

        </section>

        {/* <section id="contact-view">
        {/* <Route path="/Contact" element={<Contact />}></Route> */}
        {/* <Contact /> */}
        {/* </section> */} 
     {/* </Routes> */}
     </main>
     {/* <section id="footer-view"> */}
     <Footer />
     {/* </section> */}
    </div>
    // </Router>
  );
}

export default App;
