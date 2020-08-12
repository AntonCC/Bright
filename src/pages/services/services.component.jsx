import React from 'react'
import './services.styles.scss'
import FullScreenServices from '../../components/full-screen-services/full-screen-services.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import { serviceInfo } from './serviceInfo'
import CounselorInfo from '../../components/counselor-info/counselor-info.component'

const Services = () => {
  return (
    <div className="services">
      <FullScreenServices />
      {serviceInfo.map(info => (
        <ServiceDescription {...info} />
      ))}
      <CounselorInfo />
    </div>
  )
}
export default Services