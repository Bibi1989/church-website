import React from 'react'
import SectionWithPadding from '../components/ui/SectionWithPadding'

const VideoPage = () => {
  return (
    <SectionWithPadding display='flex' justifyContent="center" padding="5% 0">
      <iframe width="700" height="400"
      src="https://www.youtube.com/embed/96uFX-dkuRA"></iframe>
    </SectionWithPadding>
  )
}

export default VideoPage
