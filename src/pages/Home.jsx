import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user stored');
        setUser(user);
        // ...
      } else {
        // User is signed out
        console.log('no user');
        // ...
      }
    });
  }, []);

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
        navigate('/firebase-test');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate('/firebase-test');
      });
  };

  console.log(user);

  return true ? (
    <>
      <div>Home</div>
      <button className='btn' onClick={signOutFunc}>
        Log out
      </button>
    </>
  ) : (
    <Navigate to='/firebase-test' />
    // console.log('not loged in')
  );
};

export default Home;
