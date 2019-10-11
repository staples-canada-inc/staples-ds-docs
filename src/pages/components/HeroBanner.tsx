import React from 'react'
import {Jumbotron, Button, Container} from 'reactstrap'


import BgImage from '../../images/Staples_Line_Illustration.svg'

var divStyle = {
    backgroundImage: 'url(' + BgImage + ')',
    paddingTop: '120px'
}

const HeroBanner = () => {
    return (
        <div className="mb-5" >
            <Jumbotron style={divStyle}>
                <Container className="pb-4 mb-4 pl-lg-5">
                    <h1 className="mb-2">Think Brand, Live Digital</h1>
                    <p className="lead col-md-6 pl-0 pb-4">Our design system provides a common language and guiding principals that help us build great experiences for Staple's employees and customers.</p>
                    <p className="mt-4 pt-4">
                        {/* <Button color="primary">Downloads</Button>  */}
                        <Button color="primary" className="cta" href="/getting-started">View Documentation</Button>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HeroBanner