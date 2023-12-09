import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = async () => {
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="container">
      <h2 className="container__title">Log In To Your Account</h2>
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
      <button onClick={singIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
