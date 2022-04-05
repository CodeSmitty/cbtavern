import React from "react";
import "./layout.css";

// global css import
import "../../styles/global.css";

// component imports
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return <div>
    <div>
      <Navbar />
    </div>
    {children}
  </div>;
};

export default Layout;
