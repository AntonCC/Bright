import React from 'react'
import './banner.styles.scss'
import { NavLink } from 'react-router-dom'
import StudentTeacher from '../../imgs/teacher-student.jpg'
import CtaButton from '../cta-button/cta-button.component'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="side-a">
          <h2>Facilitate The Best Learning Environment.</h2>
          <h4>Bright allows teachers to easily distribute lesson materials online. No more endless stacks of papers and handouts. Students are connected with relevent study materials to assist with lessons.</h4>
          <NavLink to="/services">
            <CtaButton bgColor="#0d4d4d" text="Learn More" textColor="#fff" />
          </NavLink>
        </div>
        <div className="side-b">
          <img src={StudentTeacher} alt="student and teacher"/>
        </div>
      </div>
    </div>
  )
}
export default Banner