import React from 'react'
import { BlurContainer } from './blur-wrapper.styles'

const BlurWrapper = ({ open, children }) => {
  return (
    <BlurContainer open={open}>
      {children}
    </BlurContainer>
  )
}
export default BlurWrapper