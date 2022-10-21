// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRB3EwE4HZnJdqI5v_jGpEuJh5l-RHhc8",
  authDomain: "chat-app-38873.firebaseapp.com",
  projectId: "chat-app-38873",
  storageBucket: "chat-app-38873.appspot.com",
  messagingSenderId: "359177313710",
  appId: "1:359177313710:web:7895882b788c8451753c3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
