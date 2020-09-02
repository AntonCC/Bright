import React from 'react'
import './service-description.styles.scss'
import { NavLink } from 'react-router-dom'


const ServiceDescription = (props) => {
  const { title, subTitle, body, button, img, reverse, backgroundColor } = props

  let reverseClass = '' 
  if(reverse) {
    reverseClass += ' reverse'
  }
  let backgroundClass = ''
  if(backgroundColor) {
    backgroundClass += ' background'
  }

  return (
    <div className={`service-description${backgroundClass}`}>
      <div className="container">
        <div className={`side-a${reverseClass}`}>
          <h2>{ title }</h2>
          <h4>{ subTitle }</h4>
          <p>{ body }</p>
          <NavLink to="/try">
            { button }
          </NavLink>
        </div>
        <div className={`side-b${reverseClass}`}>
          <img src={img} alt="teacher"/>
        </div>
      </div>
    </div>
  )
}
export default ServiceDescription