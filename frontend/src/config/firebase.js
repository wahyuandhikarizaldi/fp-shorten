import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9AOQv6LEpF5O8HEuOyZbBdq3ke6EcEPM",
    authDomain: "hafozh-dfdbb.firebaseapp.com",
    projectId: "hafozh-dfdbb",
    storageBucket: "hafozh-dfdbb.appspot.com",
    messagingSenderId: "489628069659",
    appId: "1:489628069659:web:ad50dddc10db19b0b6adbe",
    measurementId: "G-RKFCFR85XW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  export default firebaseApp.firestore();