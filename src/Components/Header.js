import React from "react";
import { StyledHeader } from "../Styles";
import keep from "../assets/images/keep-logo.png";

function Header() {
  return (
    <StyledHeader>
      <img
        src={keep}
        alt="keep logo"
        width="100px"
        height="100px"
        color="black"
      />
    </StyledHeader>
  );
}

export default Header;
