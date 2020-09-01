import React from 'react'
import FullScreenAbout from '../../components/full-screen-about/full-screen-about.component'
import MissionBanner from '../../components/mission-banner/mission-banner.component'
import Goals from '../../components/goals/goals.component'
import CounselorInfo from '../../components/counselor-info/counselor-info.component'
import WeOffer from '../../components/we-offer/we-offer.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import InternetPower from '../../imgs/internet-power.jpg'

const serviceInfo = {
  title: 'Harness The Power of the Internet',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quas ullam nulla labore aperiam ipsa, reiciendis fugit quisquam, dolores tempora officia iusto natus. Ipsam suscipit ipsum eum quam eius nobis?',
  img: InternetPower
}

const About = () => {
  return (
    <div className="about">
      <FullScreenAbout />
      <MissionBanner />
      <Goals />
      <WeOffer />
      <ServiceDescription {...serviceInfo}/>
      <CounselorInfo />
    </div>
  )
}
export default About