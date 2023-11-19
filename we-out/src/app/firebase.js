import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBurO5jnYdkZdEXzqnjhTOjaWxN22i9ko4",
    authDomain: "oasis2023-cf6e9.firebaseapp.com",
    projectId: "oasis2023-cf6e9",
    storageBucket: "oasis2023-cf6e9.appspot.com",
    messagingSenderId: "20348700677",
    appId: "1:20348700677:web:158fe12f0f86949d58f46c"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
