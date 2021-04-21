import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom"
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    Button,
    CardSubtitle
} from "shards-react";

const Container = styled.div`
    margin:5px;
`;

const Display = styled.div`
display: ${props => props.display ? props.display : "none"};
`;

export default function SqCard({ img_src, title, number, subtitle, display }) {
    return (
        <Container>
            <Card>
                <CardImg top src={img_src} />
                <CardBody>
                    {/* <Badge pill>Primary</Badge> */}
                    <CardTitle>
                        <h2>{title}</h2>
                    </CardTitle>
                    <CardSubtitle style={{ paddingTop: "7.5px", marginBottom:"12.5px" }}>{subtitle}</CardSubtitle>
                    <Display display={display}>
                    <Link to={"/projects/" + number} style={{ textDecoration: 'none' }}>
                        <Button>Check It Out &rarr;</Button>
                    </Link>
                    </Display>
                </CardBody>
            </Card>
        </Container>
    );
}