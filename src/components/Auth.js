import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

// components
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.warn(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>ReactJS Firebase Test</h2>
      <SignUp />
      <SignIn />

      <p>{auth.currentUser ? "Zarejestrowany" : "Zarejestruj się!!"}</p>
    </div>
  );
};
