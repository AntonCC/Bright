import styled from 'styled-components'

export const BlurContainer = styled.div`
  filter: blur(${props => props.open ? "2px" : ''});
  width: 100%;
  height: 100%;
  z-index: 100;
`