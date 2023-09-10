import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB2gwZxSkoWtK0eVDkxQ7XTN0LiR75AOA",
  authDomain: "lavachat-28448.firebaseapp.com",
  projectId: "lavachat-28448",
  storageBucket: "lavachat-28448.appspot.com",
  messagingSenderId: "420213622297",
  appId: "1:420213622297:web:151ebb944f3ad0c98f4c88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);