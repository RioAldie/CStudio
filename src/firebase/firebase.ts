// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cstudio-476b5.firebaseapp.com",
  projectId: "cstudio-476b5",
  storageBucket: "cstudio-476b5.appspot.com",
  messagingSenderId: "568388001743",
  appId: "1:568388001743:web:1257f432648317c3083cba",
  measurementId: "G-8HL88773M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth();