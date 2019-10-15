import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const previewStyles = {
  width: '100%',
  minHeight: '12.5rem',
  position: 'relative',
  padding: '2rem 2rem 2.5rem',
  margin: '0',
  backgroundColor: '#ffffff',
  border: '1px solid #d9d9d6',
}

export const ComponentPreview = ({ children }: any) => {
  return (
    <>
      <Container fluid className="preview-box">
        <Row>
          <Col style={previewStyles}>{children}</Col>
        </Row>
      </Container>
    </>
  )
}

export default ComponentPreview