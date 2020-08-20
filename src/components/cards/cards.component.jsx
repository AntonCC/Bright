import React from 'react'
import './cards.styles.scss'
import Card from '../card/card.component'

const Cards = ({ news }) => {
  return (
    <div className="cards">
      <div className="container">
        <h2 className="cards-title">Bright News</h2>
        <div className="group">
          {news.map(article => (
            <Card article={article}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Cards