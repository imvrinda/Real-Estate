// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vrinda-estate.firebaseapp.com",
  projectId: "vrinda-estate",
  storageBucket: "vrinda-estate.appspot.com",
  messagingSenderId: "828679917036",
  appId: "1:828679917036:web:bcfa96bd48d1f78c2dc4c9",
  measurementId: "G-MK5WJVH5HR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);