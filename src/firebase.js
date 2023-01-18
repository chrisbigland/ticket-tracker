// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq28T_YUvwEbfRzmO0p-3pgCmu9NOYbBg",
  authDomain: "ticket-tracker-3d123.firebaseapp.com",
  projectId: "ticket-tracker-3d123",
  storageBucket: "ticket-tracker-3d123.appspot.com",
  messagingSenderId: "549586324631",
  appId: "1:549586324631:web:90f525ac6a0623ed1a6dd2",
  measurementId: "G-BS8S8F274B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);