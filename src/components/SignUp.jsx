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

  const showPassword = () => {
    const passwordInput = document.querySelector(".sign-up-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <div className="container">
      <h2 className="container__title">Create an Account</h2>
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input__email"
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        className="input__password sign-up-password"
      />
      <div className="show-password__container">
        <input
          type="checkbox"
          id="show-sign-up-password"
          onClick={showPassword}
        />
        <label htmlFor="show-sign-up-password">Show password</label>
      </div>
      <button onClick={signUp}>Sign up</button>
    </div>
  );
};

export default SignUp;
