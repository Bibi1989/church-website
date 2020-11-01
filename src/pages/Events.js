import React from 'react'
import { Timeline } from 'antd';

import SectionWithPadding from '../components/ui/SectionWithPadding'
import styled from 'styled-components';
import HorizontalCard from '../components/ui/HorizontalCard';

const styles = {
  minHeight: '90vh',
  paddingTop: '5%',
  // background: "teal"
}

const Events = () => {
  return (
    <SectionWithPadding {...styles} styles={styles}>
      <HeaderStyle>
        <h1>Recent Activities</h1>

      </HeaderStyle>
      <TimelineStyle mode={"left"}>
        <Timeline.Item label="01 November 2020">
          <HorizontalCard />
        </Timeline.Item>
        <Timeline.Item label="01 November 2020">
          <HorizontalCard />
        </Timeline.Item>
        <Timeline.Item></Timeline.Item>
        {/* <Timeline.Item label="2020-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item label="2020-09-01 09:12:11">Network problems being solved</Timeline.Item> */}
      </TimelineStyle>
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
