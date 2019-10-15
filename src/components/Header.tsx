import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/Staples_Logo_White_EN.svg'

export class Header extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        expanded
        fixed="top"
        className="pl-5 pl-sm-2 py-3"
        variant="dark"
      >
        <Navbar.Brand href="/" className="pl-3 pl-sm-2">
          <img src={logo} style={{ height: '30px' }} />
          <p className=" py-1 pl-0 border-left pl-3 ml-3 d-inline">
            Design System
          </p>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="https://github.com/staples-canada-inc/staples-ds-docs">
              V1.0
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
