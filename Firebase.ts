// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg7aX-Xpn95l5QA2fl7lQujmMu4oHt4Qs",
  authDomain: "caloquest.firebaseapp.com",
  projectId: "caloquest",
  storageBucket: "caloquest.appspot.com",
  messagingSenderId: "212383395155",
  appId: "1:212383395155:web:125037a0d616f85cc705a6",
  measurementId: "G-3BVNJ0TBTH"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
