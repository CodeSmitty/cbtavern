import React from "react";
import {Link} from "gatsby"
import logo from "../../images/cblogo.png"

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} className="logo" /></Link>
      <nav className="nav-container">
        <ul className="navLink-container">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/menu">Catering</Link>
          <Link to="/">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
