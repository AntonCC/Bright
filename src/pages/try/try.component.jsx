import React from 'react'
import FullScreenTry from '../../components/full-screen-try/full-screen-try.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import PriceComparison from '../../components/price-comparison/price-comparison.component'
import CounselorInfo from '../../components/counselor-info/counselor-info.component'
import ComputerPoint from '../../imgs/computer-point.jpg' 

const serviceInfo = {
  title: 'Money Back Guarentee',
  body: 'Try Bright and love it, or your money back. We are offering a 30 day guarentee for every tier of Bright service.',
  img: ComputerPoint,
  backgroundColor: true
}

const Try = () => {
  return (
    <div>
      <FullScreenTry />
      <PriceComparison />
      <ServiceDescription {...serviceInfo}/>
      <CounselorInfo />
    </div>
  )
}
export default Try