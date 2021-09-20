import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

import { GlobalStyle } from "./Styles";
// import styled from "styled-components/macro";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
