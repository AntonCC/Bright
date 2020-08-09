import React from 'react'
import { ButtonContainer } from './cta-button.styles'

const CtaButton = (props) => {
  return (
    <ButtonContainer {...props}>
      { props.text }
    </ButtonContainer>
  )
}
export default CtaButton