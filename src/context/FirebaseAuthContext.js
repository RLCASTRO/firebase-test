import { useState, useEffect, createContext } from 'react';
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log('from auth provider ', user);
        <Navigate to='home' replace={true}/>;
      } else {
        console.log('No user returned');
      }
    });
  }, [auth]);

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
        console.log(auth.currentUser);
        <Navigate to='/firebase-test' />;
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        <Navigate to='/firebase-test' />;
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
    //   const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('from handleSubmit', userCredential);
      <Navigate to='/home' />;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, signOutFunc, handleSubmit, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
