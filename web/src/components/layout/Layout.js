import React from "react";
import "./layout.css";
import HeaderCorousel from "../headerCorousel/headerCorousel";
// global css import
import "../../styles/global.css";


// component imports
import NavBar from "./Navbar";
import Footer from "./Footer"

const Layout = ({ children, data}) => {
  console.log(data)
  return <div>
      <NavBar />
    {children}
    <Footer />
  </div>;
};



export default Layout;
