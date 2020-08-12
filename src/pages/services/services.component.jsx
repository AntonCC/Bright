import React from 'react'
import './services.styles.scss'
import FullScreenServices from '../../components/full-screen-services/full-screen-services.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import { serviceInfo } from './serviceInfo'

const Services = () => {
  return (
    <div className="services">
      <FullScreenServices />
      {serviceInfo.map(info => (
        <ServiceDescription {...info} />
      ))}
    </div>
  )
}
export default Services