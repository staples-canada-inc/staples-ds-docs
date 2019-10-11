import React from 'react'
import '../styles/design-system/staples-ds.css'
import '../styles/docs/styles.css'
import Header from '../components/Header'
import QuickAccess from './components/QuickAccess'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const FourOhFour = () => {
    return (
        <>
            <Header />
            <Container className="pt-4 pt-md-5">
                <Row className="pt-4 mt-3 mb-3 pt-md-5 mt-md-5 mb-md-5 p-3">
                    <Col className="pt-4 mt-3 mb-3 pt-md-5 mt-md-5 mb-md-5">
                        <h1 style={{ fontSize: 80 }}>404</h1>
                        <h2>The page you're looking for can't be found.</h2>
                        <h5>You can try checking out some of the pages below.</h5>
                    </Col>
                </Row>
                <hr />
                <QuickAccess />
            </Container>
        </>
    )
}

export default FourOhFour
