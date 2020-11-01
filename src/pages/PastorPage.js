import React from 'react'
import styled from 'styled-components'
import Header from '../components/ui/Header'
import PastorCard from '../components/ui/PastorCard'
import SectionWithPadding from '../components/ui/SectionWithPadding'

const contents = [
  {id: 1, name: "Thomas Moriz", post: 'Regional Pastor', imageUrl: ''},
  {id: 2, name: "Paul James", post: 'Regional Pastor', imageUrl: ''},
  {id: 3, name: "Thomas Moriz", post: 'Regional Pastor', imageUrl: ''},
  {id: 4, name: "Thomas Moriz", post: 'Regional Pastor', imageUrl: ''}
]

const PastorPage = () => {
  return (
    <SectionWithPadding padding="5% 10%">
      <Header
        header="Our Pastors"
        subHeader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique earum, aspernatur maiores, exercitationem qui dicta inventore vel sed atque corporis amet, cum aliquid assumenda asperiores. Ducimus odit aliquid voluptatum?"
      />

      <Grid>
        {contents.map(content => (
          <PastorCard key={content.id} {...content} />
        ))}
      </Grid>
    </SectionWithPadding>
  )
}

export default PastorPage

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px;
  margin-top: 80px;
`
