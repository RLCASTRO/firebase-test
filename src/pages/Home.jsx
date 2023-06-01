import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/FirebaseAuthContext';

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    await logout();
    navigate('/');
    console.log('logged out');

  }

  return (
    <>
      <div>Home</div>
      <h3>Hello, {user.email}</h3>
      <button className='btn' onClick={handleLogout}>Log out</button>
    </>
  );
};

export default Home;
