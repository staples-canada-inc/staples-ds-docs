import React, { useState }  from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

export function ToastDemo() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
  
    return (
      <Row>
          <Col xs={6}>
          <Button onClick={toggleShowA} className="mb-3">
              Fade In/Out Animation
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                  <p className="h5">This is a header</p>
              </Toast.Header>
              <Toast.Body>
                  <p>Hello, world! This is a toast message.</p>
              </Toast.Body>
          </Toast>
          </Col>
          <Col xs={6} className="my-1">
          <Button onClick={toggleShowB} className="mb-3">
              No Animation
          </Button>
          <Toast onClose={toggleShowB} show={showB} animation={false}>
              <Toast.Header>
                  <p className="h5">This is a header</p>
              </Toast.Header>
              <Toast.Body>
                  <p>Hello, world! This is a toast message.</p>
              </Toast.Body>
          </Toast>
          </Col>
      </Row>
    );
  }
  
  export function ToastAutohide() {
    const [show, setShow] = useState(false);

    return (
    <>
    <Button className="mb-4" onClick={() => setShow(true)}>Show Autohide Toast</Button>
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
            <p className="h5">This is a header</p>
        </Toast.Header>
        <Toast.Body>
            <p>Hello, world! This is a toast message.</p>
        </Toast.Body>
    </Toast>
    </>
    );
  }
  