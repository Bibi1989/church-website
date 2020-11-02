import React from 'react'
import styled from 'styled-components'

const SectionWithPadding = (props) => {
  return (
    <Container {...props} style={props.styles}>
      {props.children}
    </Container>
  )
}

export default SectionWithPadding

const Container = styled.div`
  height: ${({height}) => height && height};
  background: ${({background}) => background && background};
  display: ${({display}) => display && display};
  justify-content: ${({justifyContent}) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  padding: ${({padding}) => padding ? padding : '0 10%'};

  @media(max-width: 990px) {
    padding: 5% 10px;
  }
`