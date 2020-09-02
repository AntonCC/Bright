import React, { useEffect } from 'react'
import FullScreenAbout from '../../components/full-screen-about/full-screen-about.component'
import MissionBanner from '../../components/mission-banner/mission-banner.component'
import Goals from '../../components/goals/goals.component'
import PageBottomInfo from '../../components/page-bottom-info/page-bottom-info.component'
import WeOffer from '../../components/we-offer/we-offer.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import InternetPower from '../../imgs/internet-power.jpg'

const serviceInfo = {
  title: 'Harness The Power of the Internet',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quas ullam nulla labore aperiam ipsa, reiciendis fugit quisquam, dolores tempora officia iusto natus. Ipsam suscipit ipsum eum quam eius nobis?',
  img: InternetPower
}

const bottomInfo = {
  title: 'Your Students Deserve The Best',
  subTitle: 'Get in contact with a counselor to help you set up Bright.',
  link: '/contact',
  btnText: 'Contact Counselor'
}

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about">
      <FullScreenAbout />
      <MissionBanner />
      <Goals />
      <WeOffer />
      <ServiceDescription {...serviceInfo}/>
      <PageBottomInfo {...bottomInfo}/>
    </div>
  )
}
export default About