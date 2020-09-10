import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const Navbar = ({ handleSidebar }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left-group">
          <NavLink to="/">
            <h2 className="logo">Bright</h2>
          </NavLink>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
        <NavLink to="/try">
          <CtaButton className="nav-cta" bgColor="#f9a21d" text="Try Bright" textColor="#111" />
        </NavLink>
        <div className="menu-burger" onClick={handleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}
export default Navbar