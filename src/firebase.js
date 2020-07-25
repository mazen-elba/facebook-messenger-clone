import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCSOewU62iAx2E5WNH3oBzPz41zJLCfX4",
  authDomain: "facebook-messenger-clone-7688d.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-7688d.firebaseio.com",
  projectId: "facebook-messenger-clone-7688d",
  storageBucket: "facebook-messenger-clone-7688d.appspot.com",
  messagingSenderId: "22458972270",
  appId: "1:22458972270:web:e7def2fce8aafd93c68e7f",
  measurementId: "G-92G8YTFFWJ",
});

const db = firebaseApp.firestore();

export default db;
