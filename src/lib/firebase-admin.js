// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAyfO44q_OVrch0SvTUHkssbBCVJWs01M",
  authDomain: "portfolio-db-301dc.firebaseapp.com",
  databaseURL: "https://portfolio-db-301dc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-db-301dc",
  storageBucket: "portfolio-db-301dc.firebasestorage.app",
  messagingSenderId: "757624172637",
  appId: "1:757624172637:web:283d203b9ef0b7b9b0ddb4",
  measurementId: "G-0Q839K7M70"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export{db};