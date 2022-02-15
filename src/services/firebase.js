// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABGm12Ox7macfhUG9fPCEjj6y7aG8qJPs",
  authDomain: "ecommerce-18330.firebaseapp.com",
  projectId: "ecommerce-18330",
  storageBucket: "ecommerce-18330.appspot.com",
  messagingSenderId: "394431984639",
  appId: "1:394431984639:web:5da94cb1ad5c93c4dcedca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)