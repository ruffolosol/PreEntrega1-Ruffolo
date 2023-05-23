// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBPHbVhwWaFBBkGszk6hvi1Jq-fJ7ubMZU",
  authDomain: "cultivo-andino.firebaseapp.com",
  projectId: "cultivo-andino",
  storageBucket: "cultivo-andino.appspot.com",
  messagingSenderId: "1056167246496",
  appId: "1:1056167246496:web:f4a7ff4c3f7fb9c52ae7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);