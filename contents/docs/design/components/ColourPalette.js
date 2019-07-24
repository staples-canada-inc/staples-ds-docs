import * as React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

export const ColourPalette = () => {
    return (
        <Container>
            <Row>
                <Col className="pl-0 my-4" xs={12}>
                    <h5>Primary Palette</h5>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="pl-0 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="border-0 p-2 p-md-4 bg-primary">
                        <CardBody className="text-white">
                            <CardTitle className="text-bold text-small">
                                <b>Staples Red</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 204 0 0<br />
                                    HEX: #CC0000</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 pl-md-3 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="p-2 p-md-4 bg-white">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold">
                                <b>White</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 0 0 0<br />
                                    HEX: #FFFFFF</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="pl-0 my-4" sm={12}>
                    <h5>Secondary Palette</h5>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="pl-0 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="border-0 p-2 p-md-4 bg-dark">
                        <CardBody className="text-white">
                            <CardTitle className="text-bold text-small">
                                <b>Charcoal</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 68 68 68<br />
                                    HEX: #444444</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 pl-md-3 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="p-2 p-md-4 bg-gray">
                        <CardBody className="text-white">
                            <CardTitle className="text-bold">
                                <b>Mid-Gray</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 116 118 121<br />
                                    HEX: #747679</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 pl-md-3 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="p-2 p-md-4 border-0 bg-light-gray">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold">
                                <b>Light-Gray</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 217 217 214<br />
                                    HEX: #D9D9D6</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="mt-md-4 p-2 border-0 p-md-4 bg-lightest-gray">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold">
                                <b>Lightest Gray</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 243 243 243<br />
                                    HEX: #F3F3F2</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="pl-0 my-4" sm={12}>
                    <h5>Tertiary Palette</h5>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="pl-0 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="border-0 p-2 p-md-4 bg-chartreuse">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold text-small">
                                <b>Chartreuse</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 232 228 32<br />
                                    HEX: #D2D420</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 pl-md-3 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="p-2 p-md-4 border-0 bg-cork">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold">
                                <b>Cork</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 240 179 35<br />
                                    HEX: #DDCBA4</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 pl-md-3 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="p-2 p-md-4 border-0 bg-dark-blue">
                        <CardBody className="text-white">
                            <CardTitle className="text-bold">
                                <b>Dark Blue</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 206 184 136 <br />
                                    HEX: #198294</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="mt-md-4 p-2 border-0 p-md-4 bg-blue">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold">
                                <b>Blue</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 155 211 221 <br />
                                    HEX: #9BD3DD</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="pl-0 pl-md-3 col-4 pt-4 pt-md-0" xs={12} md={4}>
                    <Card className="mt-md-4 p-2 p-md-4 border-0 bg-lightest-blue">
                        <CardBody className="text-dark">
                            <CardTitle className="text-bold">
                                <b>Lightest Blue</b>
                            </CardTitle>
                            <CardText>
                                <small>RGB: 239 246 247<br />
                                    HEX: #EFF6F7</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}