import React from 'react'
import Helmet from 'react-helmet'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Header } from './components/Header'
import { SidebarContents } from './components/SidebarContents'
import { TableOfContents } from './components/TableOfContents'
import PageLayout from 'react-sidebar'
import './css/design-system/staples-ds.css'
import './css/site/preview-overrides.css'
import menuToggle from './images/menu-toggle.svg'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const mql = typeof window !== 'undefined' && window.matchMedia(`(min-width: 576px)`)

const styleOverrides = {
  sidebar: {
    width: '310px',
    top: '56px',
    paddingTop: '30px',
    paddingLeft: '30px',
    height: '100%',
    overflow: 'hidden',
    borderRight: '1px solid #d9d9d6',
    backgroundColor: '#f3f3f2',
  },
  content: {
    top: '73px',
    paddingLeft: '0',
    backgroundColor: '#ffffff',
  },
}
const menuToggleStyle = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  zIndex: '9999999',
  height: '30px',
  width: '30px',
  display: 'block',
}

export class RootLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: true,
      open: false,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
  }

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetOpen(open) {
    this.setState({ open })
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false,
    })
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open })

    if (ev) {
      ev.preventDefault()
    }
  }

  render() {
    return (
      <>
        <Helmet
          title="Staples Design System"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Header />
        <PageLayout
          sidebar={<SidebarContents root={this.props.sidebarRoot} />}
          open={this.state.open}
          docked={this.state.docked}
          onSetOpen={this.onSetOpen}
          defaultSidebarWidth={310}
          shadow={false}
          styles={styleOverrides}
        >
            
        {/* <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Components</Breadcrumb.Item>
            <Breadcrumb.Item active>Alerts</Breadcrumb.Item>
        </Breadcrumb> */}
          
          <Container fluid>
            <Row>
              <Col xs="12" lg="9" className="pl-lg-5 ml-lg-5">
                {this.props.children}
              </Col>
              <span>
                {!this.state.docked && (
                  <a onClick={this.toggleOpen} href="#">
                    <img src={menuToggle} style={menuToggleStyle} />
                  </a>
                )}
              </span>
              {/* <Col xs="0" lg="3">
              <TableOfContents />
            </Col> */}
            </Row>
          </Container>
        </PageLayout>
      </>
    )
  }
}
