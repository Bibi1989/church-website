import React from 'react'
import styled from 'styled-components'
import Header from '../components/ui/Header'
import SectionWithPadding from '../components/ui/SectionWithPadding'
import TestimonyCard from '../components/ui/TestimonyCard'

const contents = [
  {id: 1, testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora dolorem facilis laborum ullam temporibus deserunt iusto corrupti commodi, optio officiis ducimus quisquam sit culpa aut? Maxime natus provident impedit.", name: "Laura Adams", occupation: 'Bank Director'},
  {id: 1, testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora dolorem facilis laborum ullam temporibus deserunt iusto corrupti commodi, optio officiis ducimus quisquam sit culpa aut? Maxime natus provident impedit.", name: "Math Addams", occupation: 'Lawyer'},
]

const TestimonyPage = () => {
  return (
    <SectionWithPadding padding="5% 10%">
      <Header
        header={"Testimony"}
      />

      <Grid>
        {contents.map(content => (
          <TestimonyCard key={content.id} {...content} />
        ))}
      </Grid>
    </SectionWithPadding>
  )
}

export default TestimonyPage

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media(max-width: 990px) {
    grid-template-columns: 100%;
  }
`
