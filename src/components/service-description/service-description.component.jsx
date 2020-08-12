import React from 'react'
import './service-description.styles.scss'
import Teacher from '../../imgs/teacher-service.jpg'
import CtaButton from '../cta-button/cta-button.component'

const ServiceDescription = (props) => {
  const { title, subtitle, body, button, img, reverse, backgroundColor } = props

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
          <h4>{ subtitle }</h4>
          <p>{ body }</p>
          { button }
        </div>
        <div className={`side-b${reverseClass}`}>
          <img src={img} alt="teacher"/>
        </div>
      </div>
    </div>
  )
}
export default ServiceDescription