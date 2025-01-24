import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyCUqUokzqnw1kH0KD-4LM63c8TFuONujSY",
        authDomain: "macro-tracker-b0197.firebaseapp.com",
        projectId: "macro-tracker-b0197",
        storageBucket: "macro-tracker-b0197.firebasestorage.app",
        messagingSenderId: "345300203616",
        appId: "1:345300203616:web:8a669ad2bf83d4488e2b05"
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      return {
        provide:{
          firebaseApp : app,
          db : db
        }
      }
    })