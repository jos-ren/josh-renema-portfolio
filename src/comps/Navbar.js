import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";


export default class NavbarComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md" fixed>
        <NavbarBrand href="/">Josh Renema</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>

          <Nav navbar className="ml-auto">

            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle active nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/projects/4">Petsave</DropdownItem>
                <DropdownItem href="/projects/3">Pantro</DropdownItem>
                <DropdownItem href="/projects/2">Poman</DropdownItem>
                <DropdownItem href="/projects/1">Getem</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavItem>
              <NavLink active href="/about">
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active href="/contact">
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active target="_blank" href="https://drive.google.com/file/d/1qnQhyjhDzFUMsUU7wzRiRBFAXDCvfiDp/view?usp=sharing">
                Resume
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}