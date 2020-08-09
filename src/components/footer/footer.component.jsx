import React from 'react'
import './footer.styles.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Twitter } from '../../imgs/twitter.svg'
import { ReactComponent as Facebook } from '../../imgs/facebook.svg'
import { ReactComponent as Youtube } from '../../imgs/youtube.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="side-a">
          <h2>Bright</h2>
          <div className="icons">
            <Twitter />
            <Facebook />
            <Youtube />
          </div>
        </div>
        <div className="side-b">
          <ul>
            <li><NavLink to="/">Privacy</NavLink></li>
            <li><NavLink to="/">Security</NavLink></li>
            <li><NavLink to="/">Terms Of Use</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer