import React from 'react'
import './counselor-info.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const CounselorInfo = () => {
  return (
    <div className="counselor-info">
      <div className="container">
        <h2>Your Students Deserve The Best</h2>
        <h4>Get in contact with a counselor to help you set up Bright.</h4>
        <CtaButton bgColor="lightgrey" text="Test Text" textColor="#fff" />
      </div>
    </div>
  )
}
export default CounselorInfo