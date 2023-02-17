import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFReIm1F-bTxFH1wnAswI90m2_-a2YXyY",
  authDomain: "react-hooks-blog-51d19.firebaseapp.com",
  projectId: "react-hooks-blog-51d19",
  storageBucket: "react-hooks-blog-51d19.appspot.com",
  messagingSenderId: "117778836562",
  appId: "1:117778836562:web:86435667db5c4b543e438b",
  measurementId: "G-6DG4PZHP2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = firebase.firestore();