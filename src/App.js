import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import './App.css';
import { auth } from "./firebase/init";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        setLoading(false);
        if (user) {
          setUser(user)
        }
      }, 300)
      })
  }, []);

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "pass123")
    .then(({user}) => {
      setUser(user);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "pass123")
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  function logout() {
    signOut(auth);
    setUser({});
  };

  return (
    <div className="App">
      <div className="Logo">
        Frontend Simplified
      </div>
      <div>
        {
          loading ? "loading..." :
          user.email ? (<><button onClick={logout}>{user.email[0].toUpperCase()}</button></>) : (<><button onClick={login}>Login</button><button onClick={register}>Register</button></>)
        }
      </div>
    </div>
  );
};



export default App;
