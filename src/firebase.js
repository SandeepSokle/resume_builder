



import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYLy_ZyX39LXId88cE50lDr4EMXsteM0c",
  authDomain: "resume-bulider-cd5f5.firebaseapp.com",
  databaseURL: "https://resume-bulider-cd5f5-default-rtdb.firebaseio.com",
  projectId: "resume-bulider-cd5f5",
  storageBucket: "resume-bulider-cd5f5.appspot.com",
  messagingSenderId: "780358583106",
  appId: "1:780358583106:web:1eeab9be418d066be0bedb"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
