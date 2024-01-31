import "./App.css";

import { useState } from "react";

// components
import { Auth } from "./pages/Auth";
import FrontPage from "./pages/FrontPage";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {
  const [appUser, setAppUser] = useState(undefined);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setAppUser(uid);
      console.log(`User jest zalogowany!`);
      // ...
    } else {
      // User is signed out
      // ...
      console.log(`User nie jest zalogowany!`);
    }
  });

  return (
    <div className="app">
      {appUser ? <FrontPage setAppUser={setAppUser} /> : <Auth />}
    </div>
  );
}

export default App;
