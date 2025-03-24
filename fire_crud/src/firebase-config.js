// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMRgOuj1O5yRW9hD1QXSX0YUI923dwSzY",
  authDomain: "mu-test-2425.firebaseapp.com",
  projectId: "mu-test-2425",
  storageBucket: "mu-test-2425.firebasestorage.app",
  messagingSenderId: "310316797172",
  appId: "1:310316797172:web:1c01f50857f77b93fb62a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
