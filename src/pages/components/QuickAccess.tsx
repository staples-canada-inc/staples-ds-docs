import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const QuickAccess = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="border-0">
              <CardBody className="p-5">
                <CardTitle className="h3 mt-0 mb-3">Content</CardTitle>
                <CardText>Why, when and how to use our design system.</CardText>
                <Button className="btn btn-link">View Content Guidelines</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <CardBody className="p-5">
                <CardTitle className="h3 mt-0 mb-3">Design</CardTitle>
                <CardText>Why, when and how to use our design system.</CardText>
                <Button className="btn btn-link">View Design Guidelines</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <CardBody className="p-5">
                <CardTitle className="h3 mt-0 mb-3">Components</CardTitle>
                <CardText>Why, when and how to use our design system.</CardText>
                <Button className="btn btn-link">View Components</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <CardBody className="p-5">
                <CardTitle className="h3 mt-0 mb-3">Templates</CardTitle>
                <CardText>Why, when and how to use our design system.</CardText>
                <Button className="btn btn-link">View Templates</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  
export default QuickAccess