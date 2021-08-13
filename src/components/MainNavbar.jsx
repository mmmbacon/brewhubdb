import React from 'react';

import {
  Navbar, Container, Nav, NavDropdown,
} from 'react-bootstrap';

import styled from 'styled-components';

const StyledBrand = styled(Navbar.Brand)`
  font-family: 'Oleo Script', cursive;
  font-size: 3em;
  transform: rotate(-3deg)
`;

const MainNavbar = () => (
  <div>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <StyledBrand href="#home">Brewhub</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Documentation</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default MainNavbar;
