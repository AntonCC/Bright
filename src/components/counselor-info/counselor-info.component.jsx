import React from 'react'
import './counselor-info.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const CounselorInfo = () => {
  return (
    <div className="counselor-info">
      <div className="container">
        <h2>Your Students Deserve The Best</h2>
        <h4>Get in contact with a counselor to help you set up Bright.</h4>
        <CtaButton bgColor="#f9a21d" text="Contact Counselor" textColor="#111" />
      </div>
    </div>
  )
}
export default CounselorInfo