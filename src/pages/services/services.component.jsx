import React, { useEffect } from 'react'
import './services.styles.scss'
import FullScreenServices from '../../components/full-screen-services/full-screen-services.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import { serviceInfo } from './serviceInfo'
import PageBottomInfo from '../../components/page-bottom-info/page-bottom-info.component'

const bottomInfo = {
  title: 'Your Students Deserve The Best',
  subTitle: 'Get in contact with a counselor to help you set up Bright.',
  link: '/contact',
  btnText: 'Contact Counselor'
}


const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="services">
      <FullScreenServices />
      {serviceInfo.map(info => (
        <ServiceDescription {...info} />
      ))}
      <PageBottomInfo {...bottomInfo}/>
    </div>
  )
}
export default Services