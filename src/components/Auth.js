import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
    </div>
  );
};
