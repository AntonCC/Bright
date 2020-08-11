import styled from 'styled-components'

export const BlurContainer = styled.div`
  filter: blur(${props => props.open ? "2px" : ''});
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`