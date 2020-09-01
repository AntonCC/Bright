import styled, { css } from 'styled-components'

// const ctaButtonStyles = css`
//   display: inline-block;
//   padding: .5rem 2.5rem;
//   border-radius: 3px;
// `

const ctaButtonStyles = css`
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`

const ctaButtonInverseStyles = css`
  border: 2px solid ${props => props.bgColor};
  color: ${props => props.textColor};
`
const getButtonStyles = props => {
  if(props.inverse) {
    return ctaButtonInverseStyles
  } else {
    return ctaButtonStyles
  }
}

export const ButtonContainer = styled.div`
  display: inline-block;
  padding: .5rem 2.5rem;
  font-size: 1rem;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
  transition: all 150ms ease-in;
  ${getButtonStyles}

  &:hover {
    transform: scale(1.1);
  }
`





