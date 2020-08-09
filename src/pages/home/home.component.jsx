import React from 'react'
import './home.styles.scss'
import FullScreenBanner from '../../components/full-screen-banner/full-screen-banner.component'
import Banner from '../../components/banner/banner.component'
import Testimonial from '../../components/testimonial/testimonial.component'
import Cards from '../../components/cards/cards.component'
import CounselorInfo from '../../components/counselor-info/counselor-info.component'

const Home = () => {
  return (
    <div className="home">
      <FullScreenBanner />
      <Banner />
      <Testimonial />
      <Cards />
      <CounselorInfo />
    </div>
  )
}
export default Home