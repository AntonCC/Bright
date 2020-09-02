import React from 'react'
import './home.styles.scss'
import FullScreenHome from '../../components/full-screen-home/full-screen-home.component'
import Banner from '../../components/banner/banner.component'
import Testimonial from '../../components/testimonial/testimonial.component'
import Cards from '../../components/cards/cards.component'
import PageBottomInfo from '../../components/page-bottom-info/page-bottom-info.component'
import news from './news'

const bottomInfo = {
  title: 'Your Students Deserve The Best',
  subTitle: 'Get in contact with a counselor to help you set up Bright.',
  link: '/contact',
  btnText: 'Contact Counselor'
}


const Home = () => {
  return (
    <div className="home">
      <FullScreenHome />
      <Banner />
      <Testimonial />
      <Cards news={news}/>
      <PageBottomInfo {...bottomInfo}/>
    </div>
  )
}
export default Home