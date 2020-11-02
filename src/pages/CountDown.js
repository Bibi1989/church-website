import React from 'react'
import Countdown from 'react-countdown';
import styled from 'styled-components';
import Header from '../components/ui/Header';
import Section from '../components/ui/Section';
import SectionWithPadding from '../components/ui/SectionWithPadding';
import { Colors } from '../components/utils/Colors';

const CountDown = () => {
  const renderer = ({days, hours, minutes, seconds}) => {
    return (
      <CountDownGrid>
        <CountDownCard>
          <p>{days}</p>
          <span>Days</span>
        </CountDownCard>
        <CountDownCard>
          <p>{hours}</p>
          <span>Hours</span>
        </CountDownCard>
        <CountDownCard>
          <p>{minutes}</p>
          <span>Minutes</span>
        </CountDownCard>
        <CountDownCard>
          <p>{seconds}</p>
          <span>Seconds</span>
        </CountDownCard>
      </CountDownGrid>
    )
  }
  return (
    <SectionWithPadding padding="5% 0">
      <Header
        header="Next Live Service is in"
      />
      <Center>
        <Countdown date={Date.now() + 2 * 60 * 60 * 60 * 1000} renderer={renderer} />
      </Center>
    </SectionWithPadding>
  )
}

export default CountDown

const CountDownCard = styled.div`
  height: 100px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-size: 40px;
    font-weight: bolder;
    margin: 0;
    color: ${Colors.brown};
  }
  span{
    color: ${Colors.blue};
  }
`
const CountDownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  width: 550px;

  @media(max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4% 10px;
  }
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
