import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Button, UncontrolledCollapse } from 'reactstrap'
import { Header } from './Header'
import { pathPrefix } from '../gatsby-config'
import { SidebarContents } from './SidebarContents'
import { TableOfContents } from './TableOfContents'
import PageLayout from 'react-sidebar'
import './css/design-system/staples-ds.css'
import './css/site/preview-overrides.css'

const mql = window.matchMedia(`(min-width: 800px)`)
const styleOverrieds = {
    sidebar: {
        width: "280px",
        top: "56px",
        paddingTop: "30px",
        paddingLeft: "30px",
        height: "100%",
        overflow: "hidden",
        borderRight: "1px solid #d9d9d6"
    },
    content: {
        top: "50px",
        paddingLeft: "30px"
    }
}

export class RootLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)

  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  render() {
    

    return (
    <>
    <Header />
      <PageLayout
        sidebar={ <SidebarContents root={this.props.sidebarRoot} /> }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        defaultSidebarWidth={280}
        shadow={false}
        styles={styleOverrieds}
      >

        <Container fluid>
          <Row>
            <Col xs="12" lg="9">
              {this.props.children}
            </Col>
            <Col xs="0" lg="3">
              <TableOfContents />
            </Col>
          </Row>
        </Container>
      </PageLayout>
      </>
    )
  }
}