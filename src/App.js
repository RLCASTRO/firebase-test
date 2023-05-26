import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  
  useEffect(() => {
    console.log(isLoggedIn);
    // <Navigate to='/Home'/>

  }, [isLoggedIn])
  

  const handleLogin = (status) => {
    setIsloggedIn(status);
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login handleLogin={handleLogin}  />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/home' element={<Home />  }/> */}
        <Route path='/home' element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} /> {/*this is the outlet*/}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
