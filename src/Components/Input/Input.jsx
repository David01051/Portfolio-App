
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from '../Footer/Footer';


const Body = styled.div`
background-color:black;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100vw;
height: 100vh;

`
const Titel = styled.div`
color:white;
font-size:40px;
`
const ContactUs = styled.div`
color:white;
`
const Inputs = styled.input`
margin:8px;
border-radius:4px;
border:none;
width:400px;
height: 40px;
`
const Textarea = styled.textarea`
margin:8px;
border-radius:4px;
border:none;
width:400px;
height: 40px;
`
const SubmitBut = styled.input`
margin:8px;
width:90px;
height: 35px;
color:black;
border-radius:4px;
border:none;
:hover{
  background:black;
  border: 1px solid white;
  color: white;
  transition:ease-in-out 0.5s;
}
`
const Item = styled.div`
display:flex;
justify-content:space-evenly;
color:white;
`
const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
border:1px solid white;
width:70px;
height:70px ;
border-radius:50%;
font-size:25px;
:hover{
  background:black;
  border: 1px solid rgb(255,0,47);
  color: rgb(255,0,47);
  transition:ease-in-out 0.5s;
}
`
const IconEmail = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const IconPhone = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

function Contact(event) {

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function submitHandler(event) {
        console.log(event.target);
        const name = event.target[0].value;
        const email = event.target[1].value;
        const message = event.target[2].value;
        const subject = "Hello David Talala";
        const body = `${name} - ${email} <br> ${message}`;
        window.open(`mailto:davidtalala38@gmail.com?subject=${subject}&body=${body}`);
    }

    return (
        <Body >

            <Titel className="contact">
                <h1>Contact Me</h1>
            </Titel>
            <div class="animate__animated animate__fadeInUp">
                
                <Item>
                    <IconEmail>
                        <Icons><FaEnvelope /></Icons>
                        <h4>Email</h4>
                        <p>Davidtalala38@gmail.com</p>
                    </IconEmail>
                    <IconPhone>
                        <Icons><FaPhone /></Icons>
                        <h4>Phone</h4>
                        <p>+972 52-444-9556</p>
                    </IconPhone>
                </Item>

                <ContactUs>
                    <form onSubmit={submitHandler}>
                        <div>
                            <Inputs ref={inputRef} type="text" name="name" placeholder="Name" />
                            <Inputs type="email" name="email" placeholder="Email" />
                        </div>

                        <Textarea name="Message" placeholder="Message.."></Textarea>
                        <div>
                            <SubmitBut type="submit"></SubmitBut>
                        </div>
                    </form>

                </ContactUs>


            </div>

        </Body>


    );
};

export default Contact;
