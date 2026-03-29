import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUGIn21XwIqVpZdZei6t-bmLz_CP_6ivU",
    authDomain: "agenda-de-discurso.firebaseapp.com",
    projectId: "agenda-de-discurso",
    storageBucket: "agenda-de-discurso.firebasestorage.app",
    messagingSenderId: "462407232641",
    appId: "1:462407232641:web:118fd89d2bb7dfbafcf180"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
