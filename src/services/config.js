import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyADpfAnWW7RHrKxbIUWkmntpU8T9VOXbCE",
  authDomain: "experimentando-5f460.firebaseapp.com",
  databaseURL: "https://experimentando-5f460-default-rtdb.firebaseio.com",
  projectId: "experimentando-5f460",
  storageBucket: "experimentando-5f460.appspot.com",
  messagingSenderId: "688897171066",
  appId: "1:688897171066:web:6f96c59d56be7a0295a5c3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)