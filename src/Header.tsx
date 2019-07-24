import React, { Component } from 'react'
import { NavItem, NavLink, Navbar, Nav, NavbarBrand } from 'reactstrap'
import logo from './images/Staples_Logo_White_EN.svg'

export class Header extends Component{


  render() {
    return (
      <Navbar color="dark" dark expand="md" fixed="top" className="pl-5 pl-sm-2" >
        <NavbarBrand href="/" className="pl-3 pl-sm-2" >
          <img src={logo} style={{ height: '30px' }} />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              V1.0
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
