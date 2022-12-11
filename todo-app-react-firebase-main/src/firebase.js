// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqJEC_CEReYheZN1vrnB9G-7TRUukFRCM",
  authDomain: "fir-todo-app-cda4a.firebaseapp.com",
  projectId: "fir-todo-app-cda4a",
  storageBucket: "fir-todo-app-cda4a.appspot.com",
  messagingSenderId: "951113546804",
  appId: "1:951113546804:web:00d75e3720f115d88bde61",
  measurementId: "G-4GDFW6J2TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)