import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5pI8AXDdVxi1kCGiXqUzVw32_8Y1VvyA",
  authDomain: "chat-f7a9d.firebaseapp.com",
  projectId: "chat-f7a9d",
  storageBucket: "chat-f7a9d.appspot.com",
  messagingSenderId: "53280886714",
  appId: "1:53280886714:web:67c849709949f458c69783"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
