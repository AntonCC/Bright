import React from 'react'
import './price-card.styles.scss'
import CtaButton from '../cta-button/cta-button.component'
import { ReactComponent as CheckMark } from '../../imgs/icons/check-solid.svg'

const PriceCard = ({ title, price, features, active}) => {
  return (
    <div className={`card${active ? ' active' : ''}`}>
      <h3>{ title }</h3>
      <div className="price">
        <span>{ price }</span>
      </div>
      <div className="features">
        <ul>
          {features.map(feature => (
            <li><CheckMark />{ feature }</li>
          ))}
        </ul>
      </div>
      <CtaButton text="Purchase" textColor="#fff" bgColor={`${active ? "#3d3d3d" : "#db5a6b"}`} />
    </div>
  )
}
export default PriceCard