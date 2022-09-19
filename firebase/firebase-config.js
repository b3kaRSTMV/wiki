import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyA9AD88jwf7Kv3Bu5haPZLbh_gMVTvnJRY",
  authDomain: "solid-wiki.firebaseapp.com",
  databaseURL: "https://solid-wiki-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "solid-wiki",
  storageBucket: "solid-wiki.appspot.com",
  messagingSenderId: "262655678403",
  appId: "1:262655678403:web:dede06632807b08e2c8f76",
  measurementId: "G-S7MJS5XG1E"
});

export const db = firebase.firestore();

export default firebase;
