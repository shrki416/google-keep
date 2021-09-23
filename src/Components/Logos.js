import React from "react";

import react from "../assets/images/react-logo.svg";
import firebase from "../assets/images/firebase-logo.png";

import styled from "styled-components/macro";

const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  span {
    color: var(--white);
    font-size: var(--font-size-lg);
    padding: 0 10px;
  }
`;

function Logos() {
  return (
    <Images>
      <img src={firebase} alt="firebase" height="50px" />
      <span>+</span>
      <img src={react} alt="react" width="50px" height="50px" />
    </Images>
  );
}

export default Logos;
