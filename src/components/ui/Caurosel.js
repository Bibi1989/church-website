import React from 'react'
import { Carousel } from 'antd';
import { Colors } from '../utils/Colors';

const contentStyle = {
  height: '160px',
  color: Colors.white,
  lineHeight: '160px',
  textAlign: 'center',
  background: Colors.brown,
};

const Caurosel = (props) => {
  return (
    <Carousel autoplay>
      {props.contents.map(content => (
        <div style={contentStyle}>
          {content.component}
        </div>
      ))}
  </Carousel>
  )
}

export default Caurosel
