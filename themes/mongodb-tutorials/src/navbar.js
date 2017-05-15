import React from 'react'

import NavbarDropdown from './navbar-dropdown.js'
import Search from './search.js'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href={ props.baseURL } >
          <img src={ props.baseURL + '/images/mongodb-logo.svg' } className="navbar-brand" alt="MongoDB Logo" />
        </a>

        <span className="navbar-seperator"></span>

        <NavbarDropdown />
      </div>

      <div className="navbar__right">
        <div className="navbar-links">
          <a href="#" className="navbar-links__item">Server</a>
          <a href="#" className="navbar-links__item">Drivers</a>
          <a href="#" className="navbar-links__item">Cloud</a>
          <a href="#" className="navbar-links__item">Tools</a>
          <a href={ props.baseURL } className="navbar-links__item navbar-links__item--active">Tutorials</a>
        </div>

        <div className="navbar-download">
          <a href="https://www.mongodb.com/download-center?jmp=tutorials" className="navbar-download__text">Download MongoDB</a>
          <img className="navbar-download__icon" src={ props.baseURL + '/images/download-icon.svg' } alt="Download Icon" />
        </div>

        <Search baseURL={props.baseURL} onResults={props.onResults} />
      </div>
    </nav>
  )
}

export default Navbar
