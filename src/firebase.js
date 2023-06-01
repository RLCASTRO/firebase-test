// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyATWmE6czrcFZmTtX7vem9NEUZM1EZqp2s",
  authDomain: "frontboilerplate-dev.firebaseapp.com",
  projectId: "frontboilerplate-dev",
  storageBucket: "frontboilerplate-dev.appspot.com",
  messagingSenderId: "626805481376",
  appId: "1:626805481376:web:7a11347b13c88011c18ec5",
  measurementId: "G-JSP9E91QX7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app