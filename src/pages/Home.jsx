import { useContext } from 'react';
import { AuthContext } from '../context/FirebaseAuthContext';

const Home = () => {
  const { signOutFunc } = useContext(AuthContext);


  return (
    <>
      <div>Home</div>
      <button className='btn' onClick={signOutFunc}>
        Log out
      </button>
    </>
  ) 
};

export default Home;
