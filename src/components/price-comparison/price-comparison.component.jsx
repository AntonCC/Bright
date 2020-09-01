import React from 'react'
import './price-comparison.styles.scss'
import PriceCard from '../price-card/price-card.component'
import cardInfo from './cardInfo'


const PriceComparison = () => {
  return (
    <div className="price-comparison">
      <div className="container">
        {cardInfo.map(info => (
          <PriceCard {...info}/>
        ))}
      </div>
    </div>
  )
}
export default PriceComparison