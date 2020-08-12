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
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil nisi voluptatum tenetur aspernatur facilis ab tempora eveniet architecto incidunt commodi exercitationem, veritatis, ipsum quia.</h4>
          <CtaButton bgColor="#0d4d4d" text="Test Text" textColor="#fff" />
        </div>
        <div className="side-b">
          <img src={StudentTeacher} alt="student and teacher"/>
        </div>
      </div>
    </div>
  )
}
export default Banner