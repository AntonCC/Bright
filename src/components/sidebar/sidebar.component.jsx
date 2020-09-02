import React from 'react'
import './sidebar.styles.scss'
import { NavLink } from 'react-router-dom'
import CtaButton from '../cta-button/cta-button.component'

const Sidebar = ({ open, handleSidebar }) => {
  return (
    <nav className={`sidebar ${open ? 'open' : ''}`}>
      <ul>
        <li><NavLink exact to="/" onClick={handleSidebar}>Home</NavLink></li>
        <li><NavLink exact to="/services" onClick={handleSidebar}>Services</NavLink></li>
        <li><NavLink exact to="/about" onClick={handleSidebar}>About Us</NavLink></li>
        <li><NavLink exact to="/contact" onClick={handleSidebar}>Contact</NavLink></li>
      </ul>
      <NavLink to="/try" onClick={handleSidebar}>
        <CtaButton bgColor="lightgrey" text="Try Bright" textColor="#111" bgColor="#f9a21d" />
      </NavLink>
    </nav>
  )
}
export default Sidebar