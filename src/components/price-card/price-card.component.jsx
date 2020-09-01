import React from 'react'
import './price-card.styles.scss'
import CtaButton from '../cta-button/cta-button.component'
import { ReactComponent as CheckMark } from '../../imgs/icons/check-solid.svg'
import { ReactComponent as Cross } from '../../imgs/icons/times-solid.svg'

const PriceCard = ({ title, price, activeFeatures, inactiveFeatures, inverse}) => {

  return (
    <div className={`card${inverse ? ' inverse' : ''}`}>
      <h3>{ title }</h3>
      <div className="price">
        { price }
        <span>/mo</span>
      </div>
      <div className="features">
        <ul>
          {activeFeatures.map(feature => (
            <li><CheckMark className="active-feature"/>{ feature }</li>
          ))}
          {
            inactiveFeatures 
              ? inactiveFeatures.map(feature => (
                <li><Cross className="inactive-feature" /><span>{ feature }</span></li>
              ))
              : ''
          }
        </ul>
      </div>
      <CtaButton text="Purchase" textColor="#fff" bgColor={`${inverse ? "#3d3d3d" : "#db5a6b"}`} />
    </div>
  )
}
export default PriceCard