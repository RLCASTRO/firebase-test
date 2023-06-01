import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { AuthContextProvider } from './context/FirebaseAuthContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route
          path='home'
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
