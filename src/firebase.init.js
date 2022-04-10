// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLWK5nimg9lkroOT05QNnSaqPglDA5SkE",
  authDomain: "authentication-with-emajhon.firebaseapp.com",
  projectId: "authentication-with-emajhon",
  storageBucket: "authentication-with-emajhon.appspot.com",
  messagingSenderId: "1096615845410",
  appId: "1:1096615845410:web:fe544d19c4491fa081f47b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth