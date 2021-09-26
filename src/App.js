import Header from "./Components/Header";
import Form from "./Components/Form";
import Logos from "./Components/Logos";

import { GlobalStyle } from "./Styles";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBeKxr6xyAYWw8m-fBxtoZ5R2q2tm66WY",
  authDomain: "notes-1a38b.firebaseapp.com",
  databaseURL: "https://notes-1a38b-default-rtdb.firebaseio.com",
  projectId: "notes-1a38b",
  storageBucket: "notes-1a38b.appspot.com",
  messagingSenderId: "662553462650",
  appId: "1:662553462650:web:af60643bce38c4c2fb38c3",
  measurementId: "G-1QC32VHN7Y",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase();
console.log(database);

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
