import firebase from "firebase/compat";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCinRti3gV6qqmxAg8Nbukt1mutrzuhdMQ",
    authDomain: "integradora-iii.firebaseapp.com",
    projectId: "integradora-iii",
    storageBucket: "integradora-iii.appspot.com",
    messagingSenderId: "341238291792",
    appId: "1:341238291792:web:e318da1bd2ab663bf6a055",
    measurementId: "G-4E5WVTJCKJ",
  })
  .auth();

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

export default firebase;
