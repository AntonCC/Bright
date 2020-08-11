import React from 'react'
import './sidebar.styles.scss'
import { NavLink } from 'react-router-dom'
import CtaButton from '../cta-button/cta-button.component'

const Sidebar = ({ open, handleSidebar }) => {
  return (
    <nav className={`sidebar ${open ? 'open' : ''}`}>
      <ul>
        <li><NavLink exact to="/" onClick={handleSidebar}>Home</NavLink></li>
        <li><NavLink exact to="/" onClick={handleSidebar}>Services</NavLink></li>
        <li><NavLink exact to="/" onClick={handleSidebar}>About Us</NavLink></li>
        <li><NavLink exact to="/" onClick={handleSidebar}>Teaching resources</NavLink></li>
      </ul>
      <CtaButton bgColor="lightgrey" text="Test Text" textColor="#fff" />
    </nav>
  )
}
export default Sidebar