import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn }) => {
//   const loggedIn = false;

  console.log(isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
