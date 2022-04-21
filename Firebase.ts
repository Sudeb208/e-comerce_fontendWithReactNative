// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe7TSrYSIbv4CSUWHvXdtqtDXisjNp6kE",
  authDomain: "learn--fire-base.firebaseapp.com",
  projectId: "learn--fire-base",
  storageBucket: "learn--fire-base.appspot.com",
  messagingSenderId: "461291036775",
  appId: "1:461291036775:web:cf489d13cbcbdab8ad74c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
export default authentication;
