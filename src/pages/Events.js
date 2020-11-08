import React from 'react'
import { Timeline } from 'antd';

import SectionWithPadding from '../components/ui/SectionWithPadding'
import styled from 'styled-components';
import HorizontalCard from '../components/ui/HorizontalCard';
import { useWindowSize } from '../components/utils/resizeScreen';

const styles = {
  minHeight: '50vh',
  paddingTop: '5%',
  // background: "teal"
}

const Events = () => {
  const [widthSize] = useWindowSize()
  return (
    <SectionWithPadding {...styles} styles={styles}>
      <HeaderStyle>
        <h1>Recent Activities</h1>
      </HeaderStyle>
      {widthSize > 990 ? <TimelineStyle mode={"left"}>
        <Timeline.Item label="01 November 2020">
          <HorizontalCard />
        </Timeline.Item>
        <Timeline.Item label="01 November 2020">
          <HorizontalCard />
        </Timeline.Item>
        <Timeline.Item></Timeline.Item>
      </TimelineStyle>
      :
      <Cards>
        <HorizontalCard />
        <HorizontalCard />
      </Cards>  
    }
    </SectionWithPadding>
  )
}

export default Events 

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 3em;
    color: #777777;
  }
`

const TimelineStyle = styled(Timeline)`
  /* background-color: red; */
  justify-content: flex-start;

  &.ant-timeline-label .ant-timeline-item-label{
    width: calc(45% - 15px);
    /* text-align: left; */
  }
`

const Cards = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media(max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
