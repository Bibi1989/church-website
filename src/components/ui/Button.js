import React from 'react'
import styled from 'styled-components'
import { Colors } from '../utils/Colors'

const Button = (props) => {
  return (
    <ButtonStyle>
      {props.title}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  border: none;
  outline: none;
  width: ${({width}) => width ? width : '100px'};
  height: ${({height}) => height ? height : '34px'};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '30px'};
  background: ${({background}) => background ? background : Colors.brown};
  color: ${({ color }) => color ? color : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 2px 5px rgba(0,0,0,0.25);

  &:hover{
    background: orange;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  cursor: pointer;
`
