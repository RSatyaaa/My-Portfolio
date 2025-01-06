import React from 'react';
// import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    
      <header className='navbar'>
        <nav>
            <ul>
                <li>
                    <a href='#home-view'>About</a>
                </li>
                {/* <li>
                    <a href='#about-view'>About</a>
                </li> */}
                <li>
                    <a href="#experience-view">Experience</a>
                </li>
                <li>
                    <a href="#projects-view">Projects</a>
                </li>
                {/* <li>
                    <a href='#footer'>Contact</a>
                </li> */}
            </ul>
        </nav>
      </header>
    
  )
}

export default Header
