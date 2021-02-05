import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmVUGzZs2E2mGGpJzX26e5X4nupJIU4AU",
  authDomain: "cloudfunctions-e2ec7.firebaseapp.com",
  databaseURL: "https://cloudfunctions-e2ec7.firebaseio.com",
  projectId: "cloudfunctions-e2ec7",
  storageBucket: "cloudfunctions-e2ec7.appspot.com",
  messagingSenderId: "100988734113",
  appId: "1:100988734113:web:4bae65162a8d03936abee0",
});

const db = firebaseApp.firestore();

export { db };
