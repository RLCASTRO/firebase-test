import { useContext, useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  }
  
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
