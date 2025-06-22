// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIE1RzcVnwB7M3Lfa3EoEnMEgAaOKTgBU",
  authDomain: "codythephotographer-ac950.firebaseapp.com",
  projectId: "codythephotographer-ac950",
  storageBucket: "codythephotographer-ac950.firebasestorage.app",
  messagingSenderId: "64708647945",
  appId: "1:64708647945:web:eafd81f1f6aef83b6eacd8",
  measurementId: "G-ZBE8F7DMG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);