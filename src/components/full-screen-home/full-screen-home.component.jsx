import React, { useState, useEffect } from 'react'
import './full-screen-home.styles.scss'
import debounce from '../../helperFuncs/debounce'
import { NavLink } from 'react-router-dom'
import CtaButton from '../cta-button/cta-button.component'

const FullScreenHome = () => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleHeightChange)

    return () => {
      window.removeEventListener('resize', debouncedHandleHeightChange)
    }
  }, [])

  const handleHeightChange = () => {
    setInnerHeight(window.innerHeight)
  }

  const debouncedHandleHeightChange = () => {
    debounce(handleHeightChange, 75)
  }
  
  return (
    <div className="full-screen-home">
      <div className="container">
        <h2>Lets Learn Together</h2>
        <h4>Bright is here to help students with their assignments, and teachers with curriculm engagement.</h4>
        <div className="btn-group">
          <NavLink to="/try">
            <CtaButton bgColor="#fff" text="Pricing Options" textColor="#16215a" />
          </NavLink>
          <NavLink to="/about">
            <CtaButton bgColor="lightgrey" text="Learn More" textColor="#fff" inverse />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default FullScreenHome