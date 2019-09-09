import React, { Component } from 'react'
import { NavItem, NavLink, Navbar, Nav, NavbarBrand } from 'reactstrap'
import logo from './images/Staples_Logo_White_EN.svg'

export class Header extends Component {
  render() {
    return (
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed="top"
        className="pl-5 pl-sm-2 py-3"
      >
        <NavbarBrand href="/" className="pl-3 pl-sm-2">
          <img src={logo} style={{ height: '30px' }} />
          <p className=" py-1 pl-0 border-left pl-3 ml-3 d-inline">
            Design System
          </p>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/staples-canada-inc/staples-ds-docs">
              V1.0
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
