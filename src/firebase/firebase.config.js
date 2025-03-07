// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOOYSCKYghEahYUQybxaZH6HD1JuQ23AY",
  authDomain: "prectice-416f5.firebaseapp.com",
  projectId: "prectice-416f5",
  storageBucket: "prectice-416f5.firebasestorage.app",
  messagingSenderId: "232909605475",
  appId: "1:232909605475:web:85d842137c940537d68656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)