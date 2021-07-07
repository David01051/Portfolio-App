
import React from "react";
import styled from 'styled-components';

const BodyPro = styled.div`
display:flex;
background-color:black;
width:100vw;
height: 100vh;
`
const Container = styled.div`
margin-left: 95px;
display:flex;
justify-content:flex-start;
color: white;
`
const Titel = styled.h2`
margin: 0;

padding-bottom:3rem;
font-size:40px;
line-height: 1;
font-weight: 600;

`
const P = styled.p`
letter-spacing: -.02em;
color: white;
`

const Items = styled.div`
 display:flex;

`
const BoxPro = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
width:430px;

span{
  
  display:flex;
  text-align: center;
  font-size:30px;
  font-weight: 700;
  visibility:hidden;
  z-index:2;
}
:hover span{ 
  visibility:visible;
  transform:translate(220px, 30%);
  z-index:2;
  color:white;
}
`
const ImgPro = styled.img`
width:450px;
height:450px;
border-radius:6px;

:hover{
  background-color:black;
  /* cursor:pointer; */
  opacity:0.2;
  transition:ease-in-out 0.5s;
}
`



function MyProject() {

  return (
    <BodyPro >
      <div class="animate__animated animate__fadeInUp">
        <Container>
          <div>
            <P>My Project</P>
            <Titel>Some of my works</Titel>
          </div>
        </Container>


        <Items >

          <BoxPro>
            <span>Movie Project</span>
            <ImgPro src="https://wallpaperaccess.com/full/5485717.jpg"></ImgPro>
          </BoxPro>

          <BoxPro>
            <span>YouTube Project</span>
            <ImgPro src="https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></ImgPro>

          </BoxPro>
          <BoxPro>
            <span> Project App</span>
            <ImgPro src="https://images.pexels.com/photos/5082556/pexels-photo-5082556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></ImgPro>
          </BoxPro>

        </Items>


      </div>





    </BodyPro>

  );
};

export default MyProject;
