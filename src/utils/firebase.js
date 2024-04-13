// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARJjml9ddIFi5bWJ08pUDrfY0o4ZPqBvI",
  authDomain: "lamasconeta-dcbbb.firebaseapp.com",
  projectId: "lamasconeta-dcbbb",
  storageBucket: "lamasconeta-dcbbb.appspot.com",
  messagingSenderId: "1083317123139",
  appId: "1:1083317123139:web:c7dae9f02b79ae6970bcf6",
  measurementId: "G-GG1P1KTPJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
