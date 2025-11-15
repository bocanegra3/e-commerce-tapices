// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzUMhN2EQLgjjAwcq3s_XGi9qpVQIOrw",
  authDomain: "coderejemplo-8d4af.firebaseapp.com",
  projectId: "coderejemplo-8d4af",
  storageBucket: "coderejemplo-8d4af.firebasestorage.app",
  messagingSenderId: "94627046119",
  appId: "1:94627046119:web:ea850948d7102f0721b842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)