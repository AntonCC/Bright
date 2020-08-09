import React from 'react'
import './card.styles.scss'
import Mountains from '../../imgs/mountains.jpg'

const Card = () => {
  return (
    <div className="card">
      <img src={Mountains} alt="mountains"/>
      <h4>Scaling to Meet the Needs of a Changing Environment</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione earum aliquid animi nulla est perspiciatis cum placeat, dolorum, quam omnis deleniti minima id eligendi at fugiat maxime praesentium perferendis. Eos.</p>
    </div>
  )
}
export default Card