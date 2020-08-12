import styled from 'styled-components'

export const ServiceContainer = styled.div`
  padding: 2.5rem 0;
  color: ${props => props.bg}

  .container {
    display: flex;
    align-items: center;

    .side-a {
      max-width: 500px;
      margin: 0 auto;

      h2 {
        margin-bottom: .5rem;
      }

      h4 {
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 1.5rem;
      }
    }

    .side-b {
      margin: 0 auto;
      

      img {
        width: 100%;
        height: 100%;
        max-width: 500px;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`
