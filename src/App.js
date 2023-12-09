import "./App.css";

// components
import { Auth } from "./components/Auth";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(`User jest zalogowany!`);
    // ...
  } else {
    // User is signed out
    // ...
    console.log(`User nie jest zalogowany!`);
  }
});

function App() {
  return (
    <div className="App">
      <Auth>
        <header className="App-header">
          <h1>WELCOME!!!</h1>
        </header>
      </Auth>
    </div>
  );
}

export default App;
