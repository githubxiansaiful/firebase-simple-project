// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8xk3LTxm62qnTHwuaGru6ljW6Mgmei04",
  authDomain: "fir-simple-56bc6.firebaseapp.com",
  projectId: "fir-simple-56bc6",
  storageBucket: "fir-simple-56bc6.appspot.com",
  messagingSenderId: "654776566969",
  appId: "1:654776566969:web:a6cdc55730df0341c50768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;