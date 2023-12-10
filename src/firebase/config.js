// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoBjININEfVcHV1PxoxEKCEHidFv1oyA8",
  authDomain: "chatproject-7ffc0.firebaseapp.com",
  projectId: "chatproject-7ffc0",
  storageBucket: "chatproject-7ffc0.appspot.com",
  messagingSenderId: "215513902491",
  appId: "1:215513902491:web:0831404658e027e897453e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
