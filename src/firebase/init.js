// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ-mIYsZ3iM_TNy-o5VwRYDaXkBzTvVV4",
  authDomain: "navigation-bar-a61cb.firebaseapp.com",
  projectId: "navigation-bar-a61cb",
  storageBucket: "navigation-bar-a61cb.appspot.com",
  messagingSenderId: "512202186035",
  appId: "1:512202186035:web:b5b3b341e4cbd28d81b246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();