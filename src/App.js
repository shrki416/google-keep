import Header from "./Components/Header";
import Form from "./Components/Form";
import Logos from "./Components/Logos";

import { GlobalStyle } from "./Styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Logos />
      <Form />
    </div>
  );
}

export default App;
