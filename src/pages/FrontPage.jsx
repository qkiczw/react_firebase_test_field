import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const FrontPage = (props) => {
  console.log(props);
  const logMeOut = async () => {
    try {
      await signOut(auth);
      await props.setAppUser(undefined);
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div className="page">
      <h1>Welcome at a Front Page!!!</h1>
      <button className="logMeOut" onClick={logMeOut}>
        Log Me Out!
      </button>
    </div>
  );
};

export default FrontPage;
