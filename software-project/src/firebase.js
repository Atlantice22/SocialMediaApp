// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh93GvKn0A5-vec3kwZ-hTAsG23gcn3p4",
  authDomain: "software-project-40e6e.firebaseapp.com",
  projectId: "software-project-40e6e",
  storageBucket: "software-project-40e6e.appspot.com",
  messagingSenderId: "447235744013",
  appId: "1:447235744013:web:d63164a0da84b6d7f79044",
  measurementId: "G-2EZQZZ9KMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);