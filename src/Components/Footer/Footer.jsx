import Reart from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn, FaFacebookSquare, FaInstagram } from "react-icons/fa";



const FooterDiv = styled.div`
position:absolute;
width:100vw;
height: 100px;
display: flex;
justify-content: space-evenly;
background-color:black;
`

const Icons = styled.div`
a{
font-size:30px;
color:white;
}
a :hover{
    color:rgb(255,0,47);
    transition: all 0.3s
}
`

function Footer() {


    return (
        <div>
            <FooterDiv>

                <Icons><a href="https://www.facebook.com/" ><FaFacebookSquare /></a></Icons>
                <Icons><a href="https://www.linkedin.com/feed/" ><FaLinkedinIn /></a></Icons>
                <Icons><a href="https://github.com/" ><FaGithub /></a></Icons>
                <Icons><a href="https://www.instagram.com/" ><FaInstagram /></a></Icons>

            </FooterDiv>

        </div>
    );
};
export default Footer;