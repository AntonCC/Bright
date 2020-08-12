import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const Navbar = ({ handleSidebar }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left-group">
          <h2 className="logo">Bright</h2>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/">About Us</NavLink></li>
              <li><NavLink to="/">Teaching Resources</NavLink></li>
            </ul>
          </nav>
        </div>
        <CtaButton className="nav-cta" bgColor="#f9a21d" text="Try Bright" textColor="#111" />
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