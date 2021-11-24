import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDOSAgXOA7IbP7drdPOUL8K40x_JusGGns",
    authDomain: "snapchat-1eb13.firebaseapp.com",
    projectId: "snapchat-1eb13",
    storageBucket: "snapchat-1eb13.appspot.com",
    messagingSenderId: "422641221411",
    appId: "1:422641221411:web:88a63e02a3aeaae8a8d696"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore(app)
  const provider = new firebase.auth.GoogleAuthProvider()
  const auth = firebase.auth()
  const storage = firebase.storage()