import React from 'react'
import styled from 'styled-components'

const Section = (props) => {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

export default Section

const Container = styled.div`
  min-height: ${({height}) => height && height};
  background: ${({background}) => background && background};
  display: ${({display}) => display && display};
  justify-content: ${({justifyContent}) => justifyContent && justifyContent};
  align-items: ${({alignItems}) => alignItems && alignItems};

  @media(max-width: 990px) {
    min-height: ${({mobileHeight}) => mobileHeight ? mobileHeight : "20vh"};
  }
`
