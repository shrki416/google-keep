import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export default getFirestore(app);
