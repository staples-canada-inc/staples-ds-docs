import React from 'react'
import { TabPane, Row, Col } from 'reactstrap';

export const ReactCodeBlock = ({ children }) => {
    return(
        <TabPane tabId="2">
            <Row>
                <Col sm="12">
                    {children}
                </Col>
            </Row>
        </TabPane>
    )
}

export default ReactCodeBlock