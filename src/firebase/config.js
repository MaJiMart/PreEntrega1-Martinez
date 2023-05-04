
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLLJGRGhJOwYyU4GcJS-vtWk8ir-ht-Og",
  authDomain: "proyecto-reactjs-martinez.firebaseapp.com",
  projectId: "proyecto-reactjs-martinez",
  storageBucket: "proyecto-reactjs-martinez.appspot.com",
  messagingSenderId: "569297959481",
  appId: "1:569297959481:web:dd44bcc7aea638f8066be8"
};


const app = initializeApp(firebaseConfig);

export const initFirebas = () => app