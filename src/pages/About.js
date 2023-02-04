import React from 'react';
import styled from 'styled-components';
import profile from "../img/pf.jpg"
import NavbarComp from "../comps/Navbar";
import Footer from "../comps/Footer";
import Spacer from "../comps/Spacer";

const Page = styled.div`
position: relative;
min-height: 100vh;
`;

const Box = styled.div`
display:flex;
margin: 20px;
align-items:center;
justify-content:center;
height:auto;
flex-direction:column;
@media (min-width: 600px) {
    margin: 2.5vh 5vw 2.5vh 5vw;
    flex-direction:column;
    height:auto;
}
@media (min-width: 900px) {
    margin: 2.5vh 5vw 2.5vh 5vw;
    flex-direction:row;
    height:75vh;
}
@media (min-width: 1100px) {
    margin: 5vh 10vw 5vh 10vw;
    flex-direction:row;
    height:75vh;
}
`;

const InnerBoxR = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
img{
    width:100%;
    object-fit:contain;
    border-radius:10px;
    @media (min-width: 600px) {
    object-fit:cover;
    width:100%;
    }
    @media (min-width: 700px) {
    object-fit:cover;
    width:70%;
    }
    @media (min-width: 900px) {
    object-fit:cover;
    width:30vw;
    }
    @media (min-width: 1100px) {
    object-fit:cover
    width:25vw;
    }
}
`;

const InnerBoxL = styled.div`
display:flex;
padding-left:0px;
padding-top:40px;
justify-content:center;
flex-direction:column;
@media (min-width: 600px) {
padding-left:0px;
padding-top:40px;
}
@media (min-width: 900px) {
padding-left:40px;
padding--top:0px;
}
@media (min-width: 1100px) {
padding-left:40px;
padding--top:0px;
}
`;

const About = () => {

    return <Page>
        <NavbarComp />
        <Box>
            <InnerBoxR>
                <img src={profile} />
            </InnerBoxR>
            <InnerBoxL>
                <h1>Hey there, I’m Josh</h1>
                <div>
                    <br />
                    <p>I’m a Full Stack Developer as well as a Designer, currently living in Surrey, Canada. I’ve just wrapped up my diploma at the Digital Design and Development program at BCIT, where I’ve learned how to develop and design responsive, cross-platform applications.</p>
                    <p>I’m currently working as a Full Stack Developer at <a href="https://techiesoftomorrow.com/">Techies of Tommorow</a>, a tech talent incubator that empowers recent BC tech graduates to work on real industry projects that require high-quality and cost-effective solutions.</p>
                    <p>When I’m not spending my days coding and designing, you’ll probably find me riding my jeep out in the mountains, trying out new food with friends, or testing out my Nikon film camera.</p>
                    <p>You can reach me here at ✉️ josh.renema25@gmail.com</p>
                </div>
            </InnerBoxL>
        </Box>
        <Spacer />
        <Footer />
    </Page>

};

export default About;