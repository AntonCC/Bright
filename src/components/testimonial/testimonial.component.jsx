import React from 'react'
import { NavLink } from 'react-router-dom'
import './testimonial.styles.scss'
import TestimonialPic from '../../imgs/testimonial.jpg'
import { ReactComponent as Qright } from '../../imgs/icons/qright.svg'
import { ReactComponent as Qleft } from '../../imgs/icons/qleft.svg'
import CtaButton from '../cta-button/cta-button.component'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-content">
          <img src={TestimonialPic} alt="portrait"/>
          <div className="text">
            <h4><span className="q-right"><Qleft/></span>Students can concentrate on learning and teachers on teaching.<span className="q-left"><Qright/></span></h4>
            <h5>Jane Benerdier</h5>
            <p>Associate Vice President of IT</p>
            <p>Birmingham University</p>
          </div>
        </div>
        <NavLink to='/about'>
          <CtaButton bgColor="#0d4d4d" text="More About Us" textColor="#fff" />
        </NavLink>
      </div>
    </div>
  )
}
export default Testimonial