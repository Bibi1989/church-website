import React from 'react'
import styled from 'styled-components'
import SectionWithPadding from '../components/ui/SectionWithPadding'

const image = './assets/images/nav_logo.jpeg'

const Banner = () => {
  return (
    <SectionWithPadding height="60vh" padding="0">
      <Image></Image>
    </SectionWithPadding>
  )
}

export default Banner

const Image = styled.div`
  background: url(${image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
`
