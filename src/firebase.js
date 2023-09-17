import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHdcKVakO_8t6mRPIIpS5S6C7Hgzir-xc",
  authDomain: "react-notes-14a92.firebaseapp.com",
  projectId: "react-notes-14a92",
  storageBucket: "react-notes-14a92.appspot.com",
  messagingSenderId: "812442703708",
  appId: "1:812442703708:web:fef3cfc3297fbf77e01399"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
