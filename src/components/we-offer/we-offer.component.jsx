import React from 'react'
import './we-offer.styles.scss'
import { ReactComponent as CheckCircle } from '../../imgs/icons/check-circle-regular.svg'

const WeOffer = () => {
  return (
    <div className="we-offer">
      <div className="container">
        <div className="side-a">
          <span className="flag">
            <CheckCircle />
            <h3>Online Support</h3>
          </span>
          <span className="flag">
            <CheckCircle />
            <h3> 24/7 Tutoring</h3>
          </span>
          <span className="flag">
            <CheckCircle />
            <h3>Homework Help</h3>
          </span>
        </div>
        <div className="side-b">

        </div>
      </div>
    </div>
  )
}
export default WeOffer