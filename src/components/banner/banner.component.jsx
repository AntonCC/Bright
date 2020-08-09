import React from 'react'
import './banner.styles.scss'
import StudentTeacher from '../../imgs/teacher-student.jpg'
import CtaButton from '../cta-button/cta-button.component'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="side-a">
          <h2>Facilitate The Best Learning Environment.</h2>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima omnis cupiditate enim blanditiis eligendi tenetur?</h4>
          <CtaButton bgColor="lightgrey" text="Test Text" textColor="#111" />
        </div>
        <div className="side-b">
          <img src={StudentTeacher} alt="student and teacher"/>
        </div>
      </div>
    </div>
  )
}
export default Banner