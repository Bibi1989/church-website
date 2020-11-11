import React from 'react'
import styled from 'styled-components'
import Header from '../components/ui/Header'
import PastorCard from '../components/ui/PastorCard'
import SectionWithPadding from '../components/ui/SectionWithPadding'
import { RightOutlined } from '@ant-design/icons';

const benjamin = './assets/images/benjamin.jpeg'
const maxwell = './assets/images/maxwell.jpeg'
const henry = './assets/images/henry.jpeg'
const samson = './assets/images/samson.jpeg'
const pastor1 = './assets/images/Pastor-1.png'


const pastors1 = [
  {id: 1, name: "Pastor David Philemon", post: 'Lead Pastor', imageUrl: pastor1},
  {id: 2, name: "Pastor Adoyi Samson", post: 'Presiding Pastor(Abuja)', imageUrl: samson},
]
const pastors2 = [
  {id: 1, name: "Pastor Benjamin", post: 'Presiding Pastor(Uyo)', imageUrl: benjamin},
  {id: 2, name: "Pastor Maxwell", post: 'Presiding Pastor(Oyibo PH)', imageUrl: maxwell},
  {id: 3, name: "Pastor Henry", post: 'Presiding Pastor(Central PH)', imageUrl: henry},
]

const PastorPage = () => {
  return (
    <SectionWithPadding padding="5% 10%">
      <Header
        header="Our Pastors"
        subHeader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique earum, aspernatur maiores, exercitationem qui dicta inventore vel sed atque corporis amet, cum aliquid assumenda asperiores. Ducimus odit aliquid voluptatum?"
      />

      <Grid1>
        {pastors1.map(content => (
          <PastorCard key={content.id} {...content} width="400px" />
        ))}
      </Grid1>
      <Grid2>
        {pastors2.map(content => (
          <PastorCard key={content.id} {...content} />
        ))}
      </Grid2>
    </SectionWithPadding>
  )
}

export default PastorPage

const Grid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  margin-top: 80px;
  overflow-x: auto;
  padding: 10px;

  ::-webkit-scrollbar{
    height: 5px;
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb{
    background-color: orange;
  }
`
const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5%;
  margin-top: 80px;
  overflow-x: auto;
  width: 100%;
  padding: 10px;

  ::-webkit-scrollbar{
    height: 5px;
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb{
    background-color: orange;
  }
`
