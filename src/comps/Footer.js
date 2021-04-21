import React from 'react';
import styled from 'styled-components';

const BrandBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:#212529;
color:white;
height:50px;
position:absolute;
bottom:0;
width:100vw;
`;

const Footer = () => {
    return (
        <BrandBox>
            <div>Coded{/* with ❤️ */} by Josh Renema © 2021</div>
        </BrandBox>

    )
};

export default Footer;