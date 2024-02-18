// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7yRMxs6CWLnpbSD9hsIbOI9hnJuvS7-s",
  authDomain: "isocial-1d72a.firebaseapp.com",
  projectId: "isocial-1d72a",
  storageBucket: "isocial-1d72a.appspot.com",
  messagingSenderId: "417320566699",
  appId: "1:417320566699:web:d42b5b5af1c7fb8ef75cee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
