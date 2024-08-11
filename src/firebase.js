// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfyFvTUQOKd3RmrF78Smzs4Ng7fC_OZRM",
  authDomain: "quiz-app-57e83.firebaseapp.com",
  projectId: "quiz-app-57e83",
  storageBucket: "quiz-app-57e83.appspot.com",
  messagingSenderId: "905999408946",
  appId: "1:905999408946:web:aab534afb497f86193812b",
  measurementId: "G-HJBHCXVJTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);