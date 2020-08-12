import React from 'react'
import './home.styles.scss'
import FullScreenHome from '../../components/full-screen-home/full-screen-home.component'
import Banner from '../../components/banner/banner.component'
import Testimonial from '../../components/testimonial/testimonial.component'
import Cards from '../../components/cards/cards.component'
import CounselorInfo from '../../components/counselor-info/counselor-info.component'

const Home = () => {
  return (
    <div className="home">
      <FullScreenHome />
      <Banner />
      <Testimonial />
      <Cards />
      <CounselorInfo />
    </div>
  )
}
export default Home