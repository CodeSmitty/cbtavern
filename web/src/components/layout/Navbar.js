import React from "react";
import {Link} from "gatsby"
import logo from "../../images/cblogo.png"
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} className="logo" /></Link>
    
        <Nav className="nav-container p-4">
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
        
        </Nav>
    </header>
  );
};

export default NavBar;
