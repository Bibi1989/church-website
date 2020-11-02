import React from 'react'
import styled from 'styled-components'
import { Colors } from '../utils/Colors'

const image = './assets/images/Pastor-1.png'

const TestimonyCard = (props) => {
  return (
    <Card>
      <Quote>
        <i className="fas fa-quote-right"></i>
      </Quote>
      <P>{props.testimony}</P>
      <Profile>
        <Avatar>
          <img src={image} alt="Testimonial"/>
        </Avatar>
        <UserDetail>
          <Name>{props.name}</Name>
          <Occupation>{props.occupation}</Occupation>
        </UserDetail>
      </Profile>
    </Card>
  )
}

export default TestimonyCard

const Card = styled.div`
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-top: 10px solid ${Colors.orange};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 80px;
  border-radius: 5px;
  position: relative;

  @media(max-width: 560px) {
    padding: 0 10px;
  }
  @media(max-width: 300px) {
    height: 400px;
  }
`
const Quote = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: -45px;
  border: 10px solid ${Colors.orange};
  border-radius: 50%;
  background-color: ${Colors.white};
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: ${Colors.orange};
`
const P = styled.p`
  color: #999999;
  margin-top: 50px;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img{
    width: 100%;
  }
`
const UserDetail = styled.div`
  padding-left: 20px;
`
const Name = styled.div``
const Occupation = styled.div``
