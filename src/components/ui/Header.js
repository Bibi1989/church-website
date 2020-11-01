import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return (
    <HeaderStyle>
      <H1>{props.header}</H1>
      <P>{props.subHeader}</P>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const H1 = styled.h1`
  margin: 0;
  color: #555555;
  font-size: 48px;
`
const P = styled.p`
  color: #999999;
  max-width: 700px;
  text-align: center;
`
