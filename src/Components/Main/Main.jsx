import "./Main.css";
import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup';

const BodyMain = styled.div`
display:flex;
justify-content:space-evenly;
background-color:black;
`
const AboutTitle = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
line-height: 1.9;
font-weight: 600;
letter-spacing: 0;
font-size: 2.5rem;
line-height: 1.4;
color: white;
top: 70px;
`
const P = styled.p`
letter-spacing: -0.02em;
font-size:20px;
margin-top: 70px;
color: white;
`
const Cards = styled.div`
margin: 60px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
color:white;
width:650px;
height:650px;
`
const Card = styled.div`
margin: 8px;
display:flex;
justify-content:center;
flex-direction:column;
color:white;
width:200px;
height:150px;
`
const Score = styled.h2`
margin: 0;
font-size: 65px;
font-weight: 300;
color:rgb(255,0,47);
`
const CardP = styled.p`

`

function Main() {

  return (

    <BodyMain>
      <div class="animate__animated animate__fadeInUp">

        <P>Skills</P>

        <AboutTitle>We are creative</AboutTitle>
        <AboutTitle>motion graphic</AboutTitle>
        <AboutTitle>designers.</AboutTitle>
      </div>
      <div >
        <Cards>

          <Card>
            <Score><CountUp end={85} />%</Score>
            <h3>ReactJS</h3>
            <CardP>While we’re proud of our history and our accomplishments, we’re loyal to our future and not past.</CardP>
          </Card>

          <Card>
            <Score><CountUp end={75} />%</Score>
            <h3>C#</h3>
            <p>While we’re proud of our history and our accomplishments, we’re loyal to our future and not past.</p>
          </Card>
          <Card>
            <Score><CountUp end={100} />%</Score>
            <h3>CSS</h3>
            <p>While we’re proud of our history and our accomplishments, we’re loyal to our future and not past.</p>
          </Card>
          <Card>
            <Score><CountUp end={100} />%</Score>
            <h3>HTML</h3>
            <p>While we’re proud of our history and our accomplishments, we’re loyal to our future and not past.</p>
          </Card>
          <Card>
            <Score><CountUp end={79} />%</Score>
            <h3>TypeScript</h3>
            <CardP>While we’re proud of our history and our accomplishments, we’re loyal to our future and not past.</CardP>
          </Card>
          <Card>
            <Score><CountUp end={80} />%</Score>
            <h3>NodeJS</h3>
            <CardP>While we’re proud of our history and our accomplishments, we’re loyal to our future and not past.</CardP>
          </Card>

        </Cards>
      </div>





    </BodyMain>
  );
};

export default Main;
