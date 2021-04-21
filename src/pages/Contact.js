import React from 'react';
import styled from 'styled-components';
import NavbarComp from "../comps/Navbar";
import Footer from "../comps/Footer";
import Spacer from "../comps/Spacer";
import github from "../img/github.svg"
import behance from "../img/behance.svg"
import linkedin from "../img/linkedin.svg"
import email from "../img/email.svg"

const Page = styled.div`
position: relative;
min-height: 100vh;
background-color:#212529;
`;

const Box = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin: 20px;
height:calc(85vh - 40px);
h1{
    color: white;
}
h4{
    position:absolute;
    bottom:25vh;
    color: white;
    margin-top:100px;
    font-size:12pt;
}
@media (min-width: 600px) {
    margin: 2.5vh 5vw 2.5vh 5vw;
    height:calc(85vh - 40px);
}
@media (min-width: 900px) {
    margin: 2.5vh 5vw 2.5vh 5vw;
    height:calc(85vh - 40px);
}
@media (min-width: 1100px) {
    margin: 5vh 10vw 5vh 10vw;
    height:calc(80vh - 40px);
}
`;

const Images = styled.div`
width:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
img{
    height:48px;
    margin:20px;
}
`;


const Contact = () => {

    return <Page>
        <NavbarComp />
        <Box>
            <h1>Contact Me</h1>
            {/* <h3>Check me out here </h3> */}
            <Images>
                <a target="_blank" href="https://github.com/jos-ren">
                    <img src={github} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/josh-renema/">
                    <img src={linkedin} />
                </a>
                <a target="_blank" href="https://www.behance.net/joshrenema/">
                    <img src={behance} />
                </a>
                <a target="_blank" href="https://mail.google.com/mail?view=cm&tf=0&to=josh.renema25@gmail.com&su=General Inquiry">
                    <img src={email} />
                </a>
            </Images>
            <h4>Download my Resume <a target="_blank" href="https://drive.google.com/file/d/1qnQhyjhDzFUMsUU7wzRiRBFAXDCvfiDp/view?usp=sharing">Here</a></h4>
        </Box>
        <Spacer />
        <Footer />
    </Page>

};

export default Contact;