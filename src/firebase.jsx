import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3wNHqqd_gGkjg_i-pRuAtpC-uAIwIJME",
  authDomain: "linkedin-clone-a55a7.firebaseapp.com",
  projectId: "linkedin-clone-a55a7",
  storageBucket: "linkedin-clone-a55a7.appspot.com",
  messagingSenderId: "1018138832107",
  appId: "1:1018138832107:web:4ea1d09c802e778c15e2ae",
  measurementId: "G-8T14MPCGW2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
