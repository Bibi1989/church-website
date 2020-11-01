import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import Header from '../components/ui/Header'
import SectionWithPadding from '../components/ui/SectionWithPadding'
import { Colors } from '../components/utils/Colors'

const Contact = () => {
  return (
    <SectionWithPadding padding="5% 10%">
      <Header
        header={"Stay In Touch"}
        subHeader="Subscribe to our weekly newsletter."
      />
      <Form>
        <FormGroup>
          <FormInput placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <FormInput placeholder="Email" />
        </FormGroup>
        <Button title="SUSCRIBE" />
      </Form>
    </SectionWithPadding>
  )
}

export default Contact

const Form = styled.form`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`
const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  outline: none;
  border: 1px solid ${Colors.brown};
`
