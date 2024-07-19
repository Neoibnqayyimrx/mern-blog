// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abuhanifa-blog.firebaseapp.com",
  projectId: "abuhanifa-blog",
  storageBucket: "abuhanifa-blog.appspot.com",
  messagingSenderId: "1049157822368",
  appId: "1:1049157822368:web:d18db1b6d8c21b071426c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

