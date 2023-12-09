import { auth } from "../config/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    console.log(email, password);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="container">
      <h2 className="container__title">Create an Account</h2>
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>Sign up</button>
    </div>
  );
};

export default SignUp;
