/**
 * Módulo de Inicialização do Firebase
 * @description Centraliza a configuração e exporta as instâncias do banco de dados.
 */

// Importando as funções do Firebase via CDN (compatível com front-end estático)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// Se formos usar login no futuro, importamos o Auth aqui também:
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

/**
 * ATENÇÃO: Substitua este objeto pelas chaves geradas no Console do Firebase.
 * Isso conectará seu front-end ao seu banco de dados na nuvem.
 */
const firebaseConfig = {
    apiKey: "AIzaSyDUGIn21XwIqVpZdZei6t-bmLz_CP_6ivU",
    authDomain: "agenda-de-discurso.firebaseapp.com",
    projectId: "agenda-de-discurso",
    storageBucket: "agenda-de-discurso.firebasestorage.app",
    messagingSenderId: "462407232641",
    appId: "1:462407232641:web:118fd89d2bb7dfbafcf180"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Firestore (Banco de Dados) para ser usado em outras telas
export const db = getFirestore(app);

console.log("🔥 Firebase inicializado com sucesso!");