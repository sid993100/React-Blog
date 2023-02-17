//latest version use imports like below
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFReIm1F-bTxFH1wnAswI90m2_-a2YXyY",
  authDomain: "react-hooks-blog-51d19.firebaseapp.com",
  projectId: "react-hooks-blog-51d19",
  storageBucket: "react-hooks-blog-51d19.appspot.com",
  messagingSenderId: "117778836562",
  appId: "1:117778836562:web:86435667db5c4b543e438b",
  measurementId: "G-6DG4PZHP2Z"
};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();