// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jeQUTbIHMxiEU3ydk4gHCMYf-1jOuAc",
  authDomain: "socialmediaappv03.firebaseapp.com",
  projectId: "socialmediaappv03",
  storageBucket: "socialmediaappv03.firebasestorage.app",
  messagingSenderId: "1013462326232",
  appId: "1:1013462326232:web:bff43e4fc8a7c8875970ad",
  measurementId: "G-WY6PBQ8HSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);