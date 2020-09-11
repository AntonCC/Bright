import styled, { css } from 'styled-components'

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

export const ButtonContainer = styled.button`
  display: inline-block;
  background: none;
  outline: none;
  border: none;
  padding: .5rem 2.5rem;
  font-size: 1rem;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
  transition: all 150ms ease-in;
  user-select: none;
  align-self: ${props => props.align};
  ${getButtonStyles}

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(.85);
  }
`





