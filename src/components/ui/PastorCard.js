import React from 'react'
import styled from 'styled-components'

const image = './assets/images/Pastor-1.png'

const PastorCard = (props) => {
  return (
    <Card>
      <Image>
        <img src={image} alt="pastor image"/>
      </Image>
      <Content>
        <Names>{props.name}</Names>
        <Post>{props.post}</Post>
      </Content>
    </Card>
  )
}

export default PastorCard

const Card = styled.div`
  /* width: 300px; */
  height: 350px;
  /* border: 1px solid #999999; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  /* margin: 0 10px; */
`
const Image = styled.div`

  img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`
const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Names = styled.p`
  font-size: 20px;
  font-weight: bolder;
  margin: 0;
`
const Post = styled.div``
