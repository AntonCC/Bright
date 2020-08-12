import React from 'react'
import './service-description.styles.scss'
import Teacher from '../../imgs/teacher-service.jpg'
import CtaButton from '../cta-button/cta-button.component'

const ServiceDescription = (props) => {
  const { title, subtitle, body, button, reverse } = props
  return (
    <div className="service-description">
      <div className="container">
        <div className="side-a" style={reverse ? { order: 2 } : null}>
          <h2>{ title }</h2>
          <h4>{ subtitle }</h4>
          <p>{ body }</p>
          { button }
        </div>
        <div className="side-b" style={reverse ? { order: 1 } : null}>
          <img src={Teacher} alt="teacher"/>
        </div>
      </div>
    </div>
  )
}
export default ServiceDescription