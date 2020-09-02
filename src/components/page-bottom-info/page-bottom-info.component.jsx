import React from 'react'
import './page-bottom-info.styles.scss'
import { NavLink } from 'react-router-dom'
import CtaButton from '../cta-button/cta-button.component'

const PageBottomInfo = ({ title, subTitle, link, btnText}) => {
  return (
    <div className="counselor-info">
      <div className="container">
        <h2>{ title }</h2>
        <h4>{ subTitle }</h4>
        <NavLink to={ link }>
          <CtaButton bgColor="#f9a21d" text={btnText} textColor="#111" />  
        </NavLink> 
      </div>
    </div>
  )
}
export default PageBottomInfo