import React from "react";
import "./layout.css";
import HeaderCorousel from "../headerCorousel/headerCorousel";
// global css import
import "../../styles/global.css";


// component imports
import Navbar from "./Navbar";

const Layout = ({ children, data}) => {
  console.log(data)
  return <div>
    <div className="navbar-container">
      <Navbar />
    </div>
   
    {children}
  </div>;
};



export default Layout;
