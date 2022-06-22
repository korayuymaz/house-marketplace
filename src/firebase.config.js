// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAAmFFffI6NF3veSMg9_mbAFvpkx8NjMsM",
  authDomain: "house-marketplace-app-e1551.firebaseapp.com",
  projectId: "house-marketplace-app-e1551",
  storageBucket: "house-marketplace-app-e1551.appspot.com",
  messagingSenderId: "995141870978",
  appId: "1:995141870978:web:440e6f5f191570b72c5b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()