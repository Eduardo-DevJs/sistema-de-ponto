import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgAFR3w3UEnTQSYSJecxVR5OS-Qs5EGyE",
  authDomain: "register-pointer.firebaseapp.com",
  projectId: "register-pointer",
  storageBucket: "register-pointer.appspot.com",
  messagingSenderId: "829087729731",
  appId: "1:829087729731:web:89398d4d46fa0de04e2cf6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
