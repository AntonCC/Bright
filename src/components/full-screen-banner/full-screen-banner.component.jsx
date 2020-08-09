import React from 'react'
import './full-screen-banner.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const FullScreenBanner = () => {
  return (
    <div className="full-screen-banner">
      <div className="container">
        <h2>Lets Learn Together</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore quia voluptate laborum quaerat fuga?</h4>
        <div className="btn-group">
          <CtaButton bgColor="lightgrey" text="Pricing Options" textColor="#111" />
          <CtaButton bgColor="lightgrey" text="Learn More" textColor="#fff" inverse />
        </div>
      </div>
    </div>
  )
}
export default FullScreenBanner