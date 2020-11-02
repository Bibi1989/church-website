import React from 'react'
import styled from 'styled-components'
import SectionWithPadding from '../components/ui/SectionWithPadding'

const VideoPage = () => {
  return (
    <SectionWithPadding display='flex' justifyContent="center" padding="5% 0">
      <IFrame>
        <iframe style={{width: '100%', height: '400px'}}
        src="https://www.youtube.com/embed/96uFX-dkuRA"></iframe>
      </IFrame>
    </SectionWithPadding>
  )
}

export default VideoPage

const IFrame = styled.div`
  width: 700px;

  @media(max-width: 700px) {
    max-width: 500px;
    min-width: 100px;
  }
`
