import React from 'react'
import './cards.styles.scss'
import Card from '../card/card.component'

const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
        <h2 className="cards-title">Bright News</h2>
        <div className="group">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
export default Cards