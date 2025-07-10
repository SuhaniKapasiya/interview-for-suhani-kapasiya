import React from "react";
import logo from "../assets/Logo.png";

const Header = () => (
  <header className="w-full h-16 bg-white shadow-sm flex justify-center items-center mb-6">
    <img
      src={logo}
      alt="SpaceX Logo"
      className="h-8 w-[260px] object-contain"
    />
  </header>
);

export default Header;
