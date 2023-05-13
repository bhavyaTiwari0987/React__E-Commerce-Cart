import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyPYuipMtgF8CY4DN-UkXj3JJxj1eAK1U",
  authDomain: "cart-68532.firebaseapp.com",
  projectId: "cart-68532",
  storageBucket: "cart-68532.appspot.com",
  messagingSenderId: "975429682397",
  appId: "1:975429682397:web:c3079d3a1284bb57414734"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore;
