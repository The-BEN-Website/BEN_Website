// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcj6z4roATmuco14TYVSzKhR_XckEhA4",
  authDomain: "ben-fam.firebaseapp.com",
  projectId: "ben-fam",
  storageBucket: "ben-fam.appspot.com",
  messagingSenderId: "248028055300",
  appId: "1:248028055300:web:84715a0c7380aebd40f251",
  measurementId: "G-5L9Q65JGRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);