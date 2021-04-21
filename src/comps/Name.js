import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:20vh;
h1{
    font-size: 6.25rem;
    font-weight: 500;
    letter-spacing: -.3125rem;
    color: #1f2429;
}
`;

const Name = () => {
    
    return (
        <Container>
                <h1>Hey I'm Josh. I code sometimes </h1>
        </Container>
    )
};

export default Name;