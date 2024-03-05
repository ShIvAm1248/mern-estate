// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fba31.firebaseapp.com",
  projectId: "mern-estate-fba31",
  storageBucket: "mern-estate-fba31.appspot.com",
  messagingSenderId: "489112040093",
  appId: "1:489112040093:web:4d18184c8988399a42da74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);