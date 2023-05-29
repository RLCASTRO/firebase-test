import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  
  useEffect(() => {
    // console.log(isLoggedIn);
    // <Navigate to='/Home'/>

  }, [isLoggedIn])
  

  const handleLogin = (status) => {
    setIsloggedIn(status);
  };
  return (
    <Router>
      <Routes>
        <Route path='/firebase-test' element={<Login handleLogin={handleLogin}  />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
