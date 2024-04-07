import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5YCJtciTMfJf8K6n_9qEBpVDXgMwF0fk",
  authDomain: "clone-592f9.firebaseapp.com",
  projectId: "clone-592f9",
  storageBucket: "clone-592f9.appspot.com", 
  messagingSenderId: "782642106834",
  appId: "1:782642106834:web:634194baa4143906cf780b",
  measurementId: "G-WQQS9JTK70"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
