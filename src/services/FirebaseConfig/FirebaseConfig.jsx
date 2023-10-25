
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZbTus48vcqQUJNTIg0wEox3sCDkMMkUY",
  authDomain: "ecommerce-b30f5.firebaseapp.com",
  projectId: "ecommerce-b30f5",
  storageBucket: "ecommerce-b30f5.appspot.com",
  messagingSenderId: "46321098946",
  appId: "1:46321098946:web:0cd6259dc41b1e82329b5b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };