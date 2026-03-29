credenciais do firebase.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUGIn21XwIqVpZdZei6t-bmLz_CP_6ivU",
  authDomain: "agenda-de-discurso.firebaseapp.com",
  projectId: "agenda-de-discurso",
  storageBucket: "agenda-de-discurso.firebasestorage.app",
  messagingSenderId: "462407232641",
  appId: "1:462407232641:web:118fd89d2bb7dfbafcf180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);