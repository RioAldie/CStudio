// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDYSgY6XNR93aVi0OSZaABfnkTdoVYY1bk",
  authDomain: "cstudio-476b5.firebaseapp.com",
  projectId: "cstudio-476b5",
  storageBucket: "cstudio-476b5.appspot.com",
  messagingSenderId: "568388001743",
  appId: "1:568388001743:web:1257f432648317c3083cba",
  measurementId: "G-8HL88773M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);