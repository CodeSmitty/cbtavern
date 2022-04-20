import React from "react";
import {Link} from "gatsby"
import logo from "../../images/cblogo.png"
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <img src={logo} className="logo" />
      </Link>

      <Navbar expand="lg" className="nav-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-auto"/>
        <Navbar.Collapse className='nav-collapse '>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/menu">Menu</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/menu">Catering</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/">Contact</Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
