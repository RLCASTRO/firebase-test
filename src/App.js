import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { AuthProvider } from './context/FirebaseAuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/home' element={<PrivateRoutes />}>
            <Route path='/home'  element={<Home />} />
          </Route>

          <Route path='/signup'  element={<Signup />} />
          <Route path='/firebase-test' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
