import "./HeaderNav.css";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import MyProject from '../MyProject/MyProject';
import Input from '../Input/Input';
import TimeLine from '../TimeLine/TimeLine';


const BodyNav = styled.div`
/* background-image: url('./ScreenShot2.png'); */
/* background-size:1440px ; */
background-color:black;
border: none;
font-family: 'Montserrat', sans-serif;

`
const NavBrand = styled.div`
display:flex;
justify-content:space-around;
align-items: center;
color: white;
height: 60px;
font-weight: 800;
font-size: 16px; 
text-decoration:none;
li {
  display: inline-block;
} 
.LinkBar {
display:flex;
justify-content:center;
margin-left:28px;
text-decoration:none;
font-weight: 800;
font-size:15px;
color: white;
:hover{
  color:rgb(255,0,47);
  transition: all 0.3s ease 0s;
}}`

const ContactMe = styled.nav`
li{
margin-left:31px;

a{
text-decoration:none;
color:white;
transition: all 0.3s
}
a:hover{
  color:rgb(255,0,47);
}}`

const Logo = styled.a`
display:flex;
text-decoration:none;
color: white;
font-weight: 700;
font-size: 30px;
`

function HeaderNav() {

  return (
    <Router>
      <BodyNav>
        <div class="animate__animated animate__fadeInUp">

          <NavBrand >
            <Logo href="Home" >David Talala</Logo>
            <nav>

              <li><Link className="LinkBar" to="Home">Home</Link> </li>
              <li><Link className="LinkBar" to="Skills">Skills</Link> </li>
              <li><Link className="LinkBar" to="MyProject">Portfolio</Link></li>
              <li><Link className="LinkBar" to="Input">Contact</Link></li>

            </nav>

            <ContactMe >
              <li><a href="#" class="phone-no">052-444-9556</a></li>
              <li><a href="#" class="sep">/</a></li>
              <li><a href="#" class="email">Davidtalala38@gmail.com</a></li>
            </ContactMe>
          </NavBrand>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Skills" component={Main} />
            <Route path="/MyProject" component={MyProject} />
            <Route path="/Home" component={Home} />
            <Route path="/Input" component={Input} />
            <Route path="/TimeLine" component={TimeLine} />
          </Switch>
        </div>
      </BodyNav>

    </Router>

  );
};

export default HeaderNav;
