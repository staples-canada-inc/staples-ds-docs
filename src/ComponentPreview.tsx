import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const previewStyles = {
  //display: 'flex',
  //alignItems: 'center',
 //justifyContent: 'center',
  width: '100%',
  minHeight: '12.5rem',
  position: 'relative',
  padding: '2rem 2rem 2.5rem',
  margin: '0',
  backgroundColor: '#ffffff',
  border: ' 1rem solid #ffffff,',
}

export const ComponentPreview = ({ children }: any) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={previewStyles}>{children}</Col>
        </Row>
      </Container>
    </>
  )
}
