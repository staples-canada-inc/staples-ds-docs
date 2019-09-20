import React from 'react'
import { TabPane, Row, Col } from 'reactstrap';

export const HtmlCodeBlock = ({ children }) => {
     return(
         <>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                            {children}
                    </Col>
                </Row>
            </TabPane>
        </>
    )
}

export default HtmlCodeBlock