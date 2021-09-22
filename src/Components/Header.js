import React from "react";
import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import { SiStyledComponents, SiGooglekeep } from "react-icons/si";

function Header() {
  return (
    <header>
      <IoLogoFirebase size={50} />
      <IoLogoReact size={50} />
      <SiStyledComponents size={50} />
      <SiGooglekeep size={50} />

      <h1>Google Keep</h1>
    </header>
  );
}

export default Header;
