// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from 'firebase/database';
import { getStorage } from "firebase/storage";
// import * as firebase from 'firebase';


// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBb7QNC3-5aBzFpPOLOCbnuG64QA1WVQpA",

  authDomain: "lecaxiscle-f0269.firebaseapp.com",

  projectId: "lecaxiscle-f0269",

  storageBucket: "lecaxiscle-f0269.appspot.com",

  messagingSenderId: "121347355562",

  appId: "1:121347355562:web:dba05b47d037d555d131d3",

  measurementId: "G-K5QK2CFTHK"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)
const storage = getStorage(app);

export { auth,db,storage };