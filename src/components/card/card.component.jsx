import React from 'react'
import './card.styles.scss'
import Mountains from '../../imgs/mountains.jpg'

const Card = (props) => {
  const { title, body, img } = props.article
  console.log(props)
  return (
    <div className="card">
      <img src={img}/>
      <h4>{ title }</h4>
      <p>{ body }</p>
    </div>
  )
}
export default Card