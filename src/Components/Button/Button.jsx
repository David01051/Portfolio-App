
import React from "react";
import styled from 'styled-components';
import { FaDownload } from "react-icons/fa";


const ButtonDown = styled.div`
display:flex;
justify-content:center;

`
const ButuonHover = styled.div`
border: 1px solid white;
border-radius:25px;
width:160px;
height:45px;
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



function DownCv() {


    return (
        <>
            <ButtonDown>

                <ButuonHover><a href="https://workupload.com/file/jPeCgUULDBL"></a>Download CV <FaDownload /></ButuonHover>

            </ButtonDown>
        </>
    );
}
export default DownCv;