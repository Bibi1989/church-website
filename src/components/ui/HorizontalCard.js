import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const pic1 = './assets/images/nav_logo.jpeg'

const HorizontalCard = () => {
  return (
    <CardStyle>
      <Image>
        <img src={pic1} alt=""/>
      </Image>
      <Content>
        <h1>Sunday Service</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga odio dolore sed facilis, corrupti natus et! Illum, accusamus quia!</p>
        <Button title="View Event" />
      </Content>
    </CardStyle>
  )
}

export default HorizontalCard

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 5px;
  overflow: hidden;
`
const Image = styled.div`
  height: 250px;
  overflow: hidden;
  /* background: url(${pic1});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat; */
  img{
    width: 100%;
    display: block;
  }
`
const Content = styled.div`
  padding: 20px;

`
