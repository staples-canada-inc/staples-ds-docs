import React, { Component } from 'react'
import { NavItem, NavLink, Navbar, Nav, NavbarBrand, Button } from 'reactstrap'
import logo from './images/Staples_Logo_White_EN.svg'


export class Header extends Component{
  render() {
    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src={logo} style={{ height: '30px' }} />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/docs/get-started/introduction">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
