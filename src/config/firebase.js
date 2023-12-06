import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0IEFk5SeVVJNBvympApemzMmFJfsw9UM",
  authDomain: "fir-test-field.firebaseapp.com",
  projectId: "fir-test-field",
  storageBucket: "fir-test-field.appspot.com",
  messagingSenderId: "1087960925332",
  appId: "1:1087960925332:web:b22890ff708bb5e2392081",
  measurementId: "G-0WK1E4Y30X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
