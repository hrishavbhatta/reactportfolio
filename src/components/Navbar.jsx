import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Landing.css'
import logo from '../Image/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" />

      <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        <i className="fa-solid fa-square-xmark" onClick={() => setMenuOpen(false)}></i>
      </ul>

      <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  )
}

export default Navbar
