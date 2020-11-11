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

const description = "If you are seeking His presence and power, we invite you to join us this Sunday as we worship together. God promises that all who seek Him will find Him."
const title1 = "Sunday Service"
const title2 = "Wednesday Service"

const Events = () => {
  const [widthSize] = useWindowSize()
  return (
    <SectionWithPadding {...styles} styles={styles}>
      <HeaderStyle>
        <h1>Recent Activities</h1>
      </HeaderStyle>
      {widthSize > 990 ? <TimelineStyle mode={"left"}>
        <Timeline.Item label="01 November 2020">
          <HorizontalCard description={description} title={title1} />
        </Timeline.Item>
        <Timeline.Item label="01 November 2020">
          <HorizontalCard description={description} title={title2} />
        </Timeline.Item>
        <Timeline.Item></Timeline.Item>
      </TimelineStyle>
      :
      <Cards>
        <HorizontalCard description={description} title={title1} />
        <HorizontalCard description={description} title={title2} />
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
