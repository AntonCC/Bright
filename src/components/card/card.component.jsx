import React from 'react'
import './card.styles.scss'

const Card = (props) => {
  const { title, body, img } = props.article
  console.log(props)
  return (
    <div className="card">
      <img src={img} alt="news"/>
      <h4>{ title }</h4>
      <p>{ body }</p>
    </div>
  )
}
export default Card