import React, { useEffect } from 'react'
import './full-screen-home.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const FullScreenHome = () => { 
  return (
    <div className="full-screen-home">
      <div className="container">
        <h2>Lets Learn Together</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore quia voluptate laborum quaerat fuga?</h4>
        <div className="btn-group">
          <CtaButton bgColor="#fff" text="Pricing Options" textColor="#16215a" />
          <CtaButton bgColor="lightgrey" text="Learn More" textColor="#fff" inverse />
        </div>
      </div>
    </div>
  )
}
export default FullScreenHome