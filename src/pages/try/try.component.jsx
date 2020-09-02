import React, { useEffect } from 'react'
import FullScreenTry from '../../components/full-screen-try/full-screen-try.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import PriceComparison from '../../components/price-comparison/price-comparison.component'
import PageBottomInfo from '../../components/page-bottom-info/page-bottom-info.component'
import ComputerPoint from '../../imgs/computer-point.jpg' 

const serviceInfo = {
  title: 'Money Back Guarentee',
  body: 'Try Bright and love it, or your money back. We are offering a 30 day guarentee for every tier of Bright service.',
  img: ComputerPoint,
  backgroundColor: true
}

const bottomInfo = {
  title: 'Your Students Deserve The Best',
  subTitle: 'Get in contact with a counselor to help you set up Bright.',
  link: '/contact',
  btnText: 'Contact Counselor'
}


const Try = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <FullScreenTry />
      <PriceComparison />
      <ServiceDescription {...serviceInfo}/>
      <PageBottomInfo {...bottomInfo}/>
    </div>
  )
}
export default Try