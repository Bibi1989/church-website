import { Col, Row } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'
import Caurosel from '../components/ui/Caurosel'
import Section from '../components/ui/Section'
import { Colors } from '../components/utils/Colors'
import Banner from './Banner'
import Contact from './Contact'
import CountDown from './CountDown'
import Events from './Events'
import PastorPage from './PastorPage'
import TestimonyPage from './TestimonyPage'
import VideoPage from './VideoPage'

const image = './assets/images/Pastor-1.png'
const pastorAndWife = './assets/images/pastor-and-wife.png'
const logo = './church_logo.jpg'


const homeStyles = {
  minHeight: '90vh',
}
const eventStyles = {
  height: '50vh',
}

const Home = () => {
  const [contents] = useState([
    {
      component: (
        <Grid>
          <Row>
            <Col xs={24} sm={24} md={24} lg={12}>
              <FirstColumn>
                <img src={image} alt=""/>
              </FirstColumn>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <SecondColumn>
                <h1>Welcome To Church</h1>
                <h1>On Fire International</h1>
                <h2>Home Of Supernatural</h2>
                <h3>GOD IS INTERESTED IN YOU AND HE HAS A CLEAR PLAN FOR YOUR LIFE.</h3>
                <p>We look forward to seeing you in-person during one of our weekly services as you fellowship with us.</p>
                <h2>WE CELEBRATE YOU!</h2>
                <Logo>
                  <img src={logo} alt="" width='40' height='40' />
                </Logo>
              </SecondColumn>
            </Col>
          </Row>
        </Grid>
        )
    },
    {
      component: (
        <Grid background={Colors.blue}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={12}>
              <FirstColumn>
                <img src={pastorAndWife} alt=""/>
              </FirstColumn>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <SecondColumn>
                <h1>Welcome To Church</h1>
                <h1>On Fire International</h1>
                <h2>Home Of Supernatural</h2>
                <h3>GOD IS INTERESTED IN YOU AND HE HAS A CLEAR PLAN FOR YOUR LIFE.</h3>
                <p>We look forward to seeing you in-person during one of our weekly services as you fellowship with us.</p>
                <h2>WE CELEBRATE YOU!</h2>
                <Logo>
                  <img src={logo} alt="" width='40' height='40' />
                </Logo>
              </SecondColumn>
            </Col>
          </Row>
        </Grid>
      )
    },
  ])

  return (
    <Layout>
      <Section {...homeStyles}>
        <Caurosel contents={contents} />
      </Section>
      <Section {...eventStyles}>
        <Events />
      </Section>
      <Section background={Colors.light} height="50vh">
        <PastorPage />
      </Section>
      <Section height="50vh">
        <CountDown />
      </Section>
      <Section height="50vh" background={Colors.light}>
        <VideoPage />
      </Section>
      <Section height="50vh">
        <TestimonyPage />
      </Section>
      <Section height="50vh">
        <Banner />
      </Section>
      <Section height="50vh">
        <Contact />
      </Section>
    </Layout>
  )
}

export default Home

const Grid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  min-height: 70%;
  width: 100%;
  background: ${({background}) => background ? background : "rgba(71,49,68)"};

`
const FirstColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media(max-width: 990px) {
    /* height: 40vh; */

    img{
      width: 40%;
    }
  }

  img{
    width: 100%;
  }
`
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100%;
  width: 100%;

  h1, h2, h3, p{
    color: white;
    text-align: center;
    padding: 10px 0;
    margin: 0;
  }

  h1{
    font-size: 4em;
    text-align: center;
  }

  @media(max-width: 990px) {
    padding: 40px 10px;

    h1{
      font-size: 2.5em;
      text-align: center;
    }
  }
`
const Logo = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-top: 30px;
`
