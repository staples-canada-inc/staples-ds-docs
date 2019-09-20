import React from 'react'
import { TabPane, Row, Col } from 'reactstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export const HtmlCodeBlock = ({ children }) => {
     return(
         <>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <SyntaxHighlighter language="html" style={darcula} customStyle={{ backgroundColor: '#333333', borderRadius: '0'}}>
                            {children}
                        </SyntaxHighlighter>
                    </Col>
                </Row>
            </TabPane>
        </>
    )
}

export default HtmlCodeBlock