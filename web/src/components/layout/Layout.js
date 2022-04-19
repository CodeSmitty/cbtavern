import React from "react";
import "./layout.css";
import HeaderCorousel from "../headerCorousel/headerCorousel";
// global css import
import "../../styles/global.css";


// component imports
import NavBar from "./Navbar";

const Layout = ({ children, data}) => {
  console.log(data)
  return <div>
    <div className="navbar-container">
      <NavBar />
    </div>
   
    {children}
  </div>;
};



export default Layout;
