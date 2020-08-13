import React from 'react'
import './goals.styles.scss'
import { goalsInfo } from './goalsInfo'
import GoalCard from '../goal-card/goal-card.component'

const Goals = () => {
  return (
    <div className="goals">
      <div className="container">
        <h2 className="goals-title">Our Goals</h2>
        <div className="inner">
          {goalsInfo.map(info => (
            <GoalCard {...info} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Goals