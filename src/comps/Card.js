import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle, Badge } from "shards-react";

const Container = styled.div`
    margin:20px;
    cursor:pointer;
`;

const CardComp = ({ title, subtitle, onClick }) => {

    return <Container onClick={onClick}>
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <Badge pill>Primary</Badge>
                <Badge pill theme="success">
                Secondary
                </Badge>
                <Badge pill theme="warning">
                    Warning
                </Badge>
                <Badge pill theme="danger">
                    Danger
                </Badge>
            </CardBody>
        </Card>
    </Container>

};

export default CardComp;