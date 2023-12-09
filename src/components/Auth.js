import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

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
      <input
        placeholder="email..."
        type="email"
        onChange={(e) => setEmail(e.target.value)} //od razu można target z eventa zapisać do stanu bez pisania dodatkowej funkcji
      />
      <input
        placeholder="password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logOut}>Log Out</button>
      <p>{auth.currentUser ? "Zarejestrowany" : "Zarejestruj się!!"}</p>
    </div>
  );
};
