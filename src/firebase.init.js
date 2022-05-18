// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhGyZsodQdIWQrs1zLsUeFWTd8W3MghNk",
  authDomain: "todo-list-5c001.firebaseapp.com",
  projectId: "todo-list-5c001",
  storageBucket: "todo-list-5c001.appspot.com",
  messagingSenderId: "848609742077",
  appId: "1:848609742077:web:adfe1b0ac4ba6a3740c294",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
