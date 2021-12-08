// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCinRti3gV6qqmxAg8Nbukt1mutrzuhdMQ",
  authDomain: "integradora-iii.firebaseapp.com",
  projectId: "integradora-iii",
  storageBucket: "integradora-iii.appspot.com",
  messagingSenderId: "341238291792",
  appId: "1:341238291792:web:e318da1bd2ab663bf6a055",
  measurementId: "G-4E5WVTJCKJ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const dbRef = collection(db, "users");
