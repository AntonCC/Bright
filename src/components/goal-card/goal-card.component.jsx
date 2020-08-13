import React from 'react'
import './goal-card.styles.scss'

const GoalCard = ({ title, body, icon}) => {
  return (
    <div className="goal-card">
      <div className="icon">
        { icon }
      </div>
      <div className="text">
        <h2>{ title }</h2>
        <p>{ body }</p>
      </div>
    </div>
  )
}
export default GoalCard