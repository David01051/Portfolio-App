import "./Home.css";
import React, { useContext } from "react";
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn, FaFacebookSquare, FaInstagram, FaChevronDown } from "react-icons/fa";
import DataContext from "../Context/Context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from '../Button/Button'
import Footer from '../Footer/Footer'



const BodyHome = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
width: 100vw;
height: 90vh;
`
const HeaderTitle = styled.div`
/* height:500px;  */
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title = styled.div`
font-weight: 600;
color:white;
`
const Hello = styled.div`
font-weight: 600;
color:rgb(255,0,47);
`
const FontP = styled.div`

font-size:25px;
color: white;
`
const TextStyled = styled.div`
font-size:75px;
color: white;
`
const ButtonTime = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const ButuonHover = styled.div`
border: 1px solid white;
border-radius:25px;
width:40px;
height:70px;
color:white;
display:flex;
justify-content:center;
align-items:center;

 :hover{
  border: 1px solid rgb(255,0,47);
  color:rgb(255,0,47);
  transition:ease-in-out 0.5s;
}
`
const H3 = styled.h3`
color:white;
`
const ButtonDown = styled.div`
display:flex;
justify-content:flex-start;
margin-left:60px;

`

function Home() {

  const context = useContext(DataContext)

  return (

    <BodyHome>

      <HeaderTitle >

        <TextStyled>
          <Hello>{context.hello}</Hello>
          <Title>{context.title}</Title>
        </TextStyled>

        <div class="animate__animated animate__fadeInUp">
          <FontP >Frontend - Developer</FontP>
          <FontP >Web Designer</FontP>
        </div>
      </HeaderTitle>

      <ButtonTime>
        <Route>
          <Link to="TimeLine"><ButuonHover> <FaChevronDown /> </ButuonHover></Link>
        </Route>
        <H3>TimeLine</H3>
      </ButtonTime>

      <ButtonDown>
        <Button />
      </ButtonDown>

      <Footer />

    </BodyHome>


  );
};

export default Home;
