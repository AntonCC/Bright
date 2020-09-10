import React from 'react'
import './services.styles.scss'
import FullScreenServices from '../../components/full-screen-services/full-screen-services.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import { serviceInfo, bottomInfo } from './serviceInfo'
import PageBottomInfo from '../../components/page-bottom-info/page-bottom-info.component'




const Services = () => {
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