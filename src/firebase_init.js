// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrgpcL0eaKfSmmrVmvAqN05KvFB4Oi7WA",
  authDomain: "career-field.firebase.com",
  projectId: "career-field",
  storageBucket: "career-field.firebasestorage.app",
  messagingSenderId: "120779511226",
  appId: "1:120779511226:web:6f7ca0baa2b86a4830f983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);