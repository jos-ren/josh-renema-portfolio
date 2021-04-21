import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

img{
    object-fit:cover;
    height:40vh;
    width:100vw;
}

@media (min-width: 600px) {
img{
    object-fit:cover;
    height:50vh;
    width:100vw;
}
}

@media (min-width: 900px) {
img{
    object-fit:cover;
    height:60vh;
    width:100vw;
}
}

@media (min-width: 1100px) {
img{
    object-fit:cover;
    height:70vh;
    width:100vw;
}
}
`;

const Hero = ({ img_src }) => {
    return (
        <Container>
            <img src={img_src} />
        </Container>
    )
};

export default Hero;