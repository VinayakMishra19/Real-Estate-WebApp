// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d8501.firebaseapp.com",
  projectId: "mern-estate-d8501",
  storageBucket: "mern-estate-d8501.appspot.com",
  messagingSenderId: "1064507348467",
  appId: "1:1064507348467:web:90ed1b2d10de626b822e86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);