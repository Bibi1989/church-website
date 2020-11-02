import React from 'react'
import { Layout as ContainerLayout } from 'antd';
import styled from 'styled-components';
import Button from '../ui/Button';
import {Colors} from '../utils/Colors'

const { Header, Footer, Content } = ContainerLayout;

const logo = './logo1.png'

const Layout = (props) => {
  return (
    <ContainerLayoutStyle>
      <NavbarStyle>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <NavList>
          <List>
            Home
          </List>
          <List>
            Sermons
          </List>
          <List>
            Live/Online
          </List>
          <List>
            About
          </List>
          <List>
            Locations
          </List>
          <List>
            Events
          </List>
        </NavList>
        <Button title="Give" />
      </NavbarStyle>
      <ContentStyle>{props.children}</ContentStyle>
      <FooterStyle style={{backgroundColor: Colors.blue}}>
        <FootListUl>
          <FootListLi>
            <FootListImage>
              <img src={logo} alt=""/>
            </FootListImage>
          </FootListLi>
          <FootListLi style={{color: Colors.orange, fontWeight: 'bolder'}}>
            MAIN OFFICE:
          </FootListLi>
          <FootListLi>
            4836 West 13th Street,
          </FootListLi>
          <FootListLi>
            Cicero, IL 60804
          </FootListLi>
          <FootListLi>
            773-827-1097
          </FootListLi>
          <FootListLi>
            info@cofinternational.org
          </FootListLi>
        </FootListUl>
        <FootListUl>
          <FootListLi style={{color: Colors.orange, fontWeight: 'bolder'}}>
            ABOUT COFI
          </FootListLi>
          <FootListLi>
            Our Vision
          </FootListLi>
          <FootListLi>
            Our Mandate
          </FootListLi>
          <FootListLi>
            Our Leadership
          </FootListLi>
          <FootListLi>
            Our Minitries
          </FootListLi>
          <FootListLi>
            Our Locations
          </FootListLi>
        </FootListUl>
        <FootListUl>
          <FootListLi style={{color: Colors.orange, fontWeight: 'bolder'}}>
            MEDIA
          </FootListLi>
          <FootListLi>
            Watch Live
          </FootListLi>
          <FootListLi>
            Sermons
          </FootListLi>
          <FootListLi>
            COFI Revival TV
          </FootListLi>
        </FootListUl>
        <FootListUl>
          <FootListLi style={{color: Colors.orange, fontWeight: 'bolder'}}>
            MORE...
          </FootListLi>
          <FootListLi>
            Ways To Give
          </FootListLi>
          <FootListLi>
            Cicero, IL 60804
          </FootListLi>
          <FootListLi>
            Events
          </FootListLi>
          <FootListLi>
            Plan A Visit
          </FootListLi>
          <FootListLi>
            Contact Us
          </FootListLi>
        </FootListUl>
      </FooterStyle>
    </ContainerLayoutStyle>
  )
}

export default Layout

const ContainerLayoutStyle = styled(ContainerLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentStyle = styled(Content)`
  background-color: white;
  min-height: 100%;
`
const FooterStyle = styled(Footer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 4% 10%;

  @media(max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4% 3%;
  }
  @media(max-width: 560px) {
    grid-template-columns: 100%;
    padding: 4% 10px;
  }
`

const NavbarStyle = styled.nav`
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  @media(max-width: 760px) {
    display: none;
  }
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`
const List = styled.li`
  padding: 0 20px;
  color: rgb(71,49,68);
`

const Logo = styled.div`
/* background-color: red; */
  width: 100px;
  height: 40px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
`
const FootListUl = styled.ul`
  list-style: none;
`
const FootListLi = styled.li`
  color: white;
  padding-bottom: 5px;
`
const FootListImage = styled.div`
  width: 100px;
  margin-bottom: 20px;

  img{
    width: 100%;
  }
`
