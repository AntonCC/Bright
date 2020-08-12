import React from 'react'
import FullScreenAbout from '../../components/full-screen-about/full-screen-about.component'
import MissionBanner from '../../components/mission-banner/mission-banner.component'

const About = () => {
  return (
    <div className="about">
      <FullScreenAbout />
      <MissionBanner />
    </div>
  )
}
export default About