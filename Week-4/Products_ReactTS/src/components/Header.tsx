import React from "react";
import Navbar from "./Header/Navbar";
import { useLocation } from "react-router-dom";

const Header = () => {
  // try to aviod extra effort
  const location = useLocation();
  return (
    <div>
      <Navbar isShowSearch={location.pathname === "/"} />
    </div>
  );
};

export default Header;
