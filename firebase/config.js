// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalSVM6PIeUJDBDdi4gN_7eH0MxJOx87U",
  authDomain: "faceshop-33e49.firebaseapp.com",
  projectId: "faceshop-33e49",
  storageBucket: "faceshop-33e49.appspot.com",
  messagingSenderId: "841475592811",
  appId: "1:841475592811:web:17edf3067aa5f7fd28972e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;