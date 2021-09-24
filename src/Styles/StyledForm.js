import styled from "styled-components/macro";

const StyledForm = styled.form`
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  padding: 15px;
  border-radius: 7px;
  background-color: var(--white);
  box-shadow: 0 1px 5px rgb(138, 137, 137);

  input,
  textarea {
    width: 100%;
    border: none;
    padding: 5px;
    outline: none;
    font-size: var(--font-size-sm);
    font-family: var(--font);
    resize: none;
  }

  button {
    position: absolute;
    right: 18px;
    bottom: -18px;
    background-color: var(--white);
    color: var(--yellow);
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgb(138, 137, 137);
    cursor: pointer;
  }
`;

export default StyledForm;
