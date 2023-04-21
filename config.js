import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBz3y-NA6uE58xNk6cFuOT7YLRF8OzjH-U",
    authDomain: "proj71-a5b20.firebaseapp.com",
    projectId: "proj71-a5b20",
    storageBucket: "proj71-a5b20.appspot.com",
    messagingSenderId: "81564051613",
    appId: "1:81564051613:web:2f61494b378335b7a78c74"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
