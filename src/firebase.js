import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBbG9ZjVzGIavaUHdYKn_1shVwNc0WQZhY",
  authDomain: "clone-5d5bc.firebaseapp.com",
  projectId: "clone-5d5bc",
  storageBucket: "clone-5d5bc.appspot.com",
  messagingSenderId: "1083251589573",
  appId: "1:1083251589573:web:e7caf09aa5683f33e58bac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
