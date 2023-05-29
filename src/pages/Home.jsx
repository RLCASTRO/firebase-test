import { Navigate } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
  console.log('Home', isLoggedIn);
  return isLoggedIn 
  ? 
    <div>Home</div> 
  : 
  <Navigate to="/firebase-test" />;
};

export default Home;