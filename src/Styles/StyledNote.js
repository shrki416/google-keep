import styled from "styled-components/macro";

const styledNote = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin: 16px;
  width: 240px;
  float: left;

  h3 {
    font-size: var(--font-size-medium);
    margin-bottom: 6px;
  }

  p {
    font-size: var(--font-size-medium);
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  button {
    position: relative;
    float: right;
    margin-right: 10px;
    color: var(--yellow);
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
  }
`;

export default styledNote;
