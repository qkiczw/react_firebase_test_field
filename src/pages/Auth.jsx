import { useEffect, useState } from "react";
import { auth, firestoreDB } from "../config/firebase";

// firestore
import { collection, getDocs } from "firebase/firestore";

import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

// components
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [movies, setMovies] = useState([]);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.warn(err);
    }
  };

  // firestore
  const movieListRef = collection(firestoreDB, "movies"); // tutaj ustawiamy odwołanie (referencje) do konkretnej kolekcji w bazie firestore

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const data = await getDocs(movieListRef); // pobieramy dane (zawartość) konkretnej kolekcji
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })); // tutaj tworzymy osobne obiekty dla każdego doca z kolekcji

        setMovies(filteredData);
      } catch (err) {
        console.warn(err);
      }
    };

    getMoviesList();
  }, []);
  return (
    <div className="auth-container">
      <h2>ReactJS Firebase Test</h2>
      <div className="auth-forms">
        <SignUp />
        <span className="vertical-line"></span>
        <SignIn />
      </div>

      {/* <hr width="75%" />
      <h2>Movies List: </h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}, {movie.year}, {movie.genre}
          </li>
        ))}
      </ul>
      {console.log(`filtered: `, movies)} */}
    </div>
  );
};
