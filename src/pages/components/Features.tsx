import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export const Features = () => {
    return (
        <Container>
            <Row className="my-5 py-5">
                <Col>
                    <Card>
                        <CardBody className="p-5">
                            <CardTitle className="h3 mt-0 mb-3">
                                Start Learning
                            </CardTitle>
                            <CardText>
                                Explore the documentation to learn how to use our design system and it's components in your next project.
                            </CardText>
                            <a href="http://localhost:8000/docs/getting-started" className="btn btn-link">
                                View Documentation
                            </a>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="p-5">
                            <CardTitle className="h3 mt-0 mb-3">
                                Resources & Downloads
                            </CardTitle>
                            <CardText>
                                Download all the resources and dependancies you'll need to start developing with the Staples Design System.
                            </CardText>
                            <a href="http://localhost:8000/docs/resources-download" className="btn btn-link">
                                View Downloads
                            </a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <hr className="my-5"/>
        </Container>
    )
}
