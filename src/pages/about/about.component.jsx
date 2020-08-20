import React from 'react'
import FullScreenAbout from '../../components/full-screen-about/full-screen-about.component'
import MissionBanner from '../../components/mission-banner/mission-banner.component'
import Goals from '../../components/goals/goals.component'
import CounselorInfo from '../../components/counselor-info/counselor-info.component'
import WeOffer from '../../components/we-offer/we-offer.component'

const About = () => {
  return (
    <div className="about">
      <FullScreenAbout />
      <MissionBanner />
      <Goals />
      <WeOffer />
      <CounselorInfo />
    </div>
  )
}
export default About