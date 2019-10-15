import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const QuickAccess = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="border-0">
              <Card.Body className="p-5">
                <Card.Title className="h3 mt-0 mb-3">Content</Card.Title>
                <Card.Text>Why, when and how to use our design system.</Card.Text>
                <a href="/docs/content/graphic-treatment">View Content Guidelines</a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body className="p-5">
                <Card.Title className="h3 mt-0 mb-3">Design</Card.Title>
                <Card.Text>Why, when and how to use our design system.</Card.Text>
                <a href="/docs/design/accessible-design">View Design Guidelines</a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body className="p-5">
                <Card.Title className="h3 mt-0 mb-3">Components</Card.Title>
                <Card.Text>Why, when and how to use our design system.</Card.Text>
                <a href="/docs/components/Alerts/">View Components</a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body className="p-5">
                <Card.Title className="h3 mt-0 mb-3">Templates</Card.Title>
                <Card.Text>Why, when and how to use our design system.</Card.Text>
                <a href="/docs#">Coming Soon</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  
export default QuickAccess