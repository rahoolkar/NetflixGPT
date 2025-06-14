// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpbM5xTk_auq9xqCSL9coLCLBZHW48yE0",
  authDomain: "netflixgpt-5a93b.firebaseapp.com",
  projectId: "netflixgpt-5a93b",
  storageBucket: "netflixgpt-5a93b.firebasestorage.app",
  messagingSenderId: "547526875195",
  appId: "1:547526875195:web:43e8e40506c20b998f641e",
  measurementId: "G-TV024NSQ9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);