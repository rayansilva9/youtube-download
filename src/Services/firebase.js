import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBaCCTTp0LVPuZY-9hTMRYKpoBkwXn4erM",
  authDomain: "tubeyou-8b554.firebaseapp.com",
  projectId: "tubeyou-8b554",
  storageBucket: "tubeyou-8b554.appspot.com",
  messagingSenderId: "1018568926488",
  appId: "1:1018568926488:web:939faec3921f832010aa6d",
  measurementId: "G-B50M5204VR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, analytics, auth}