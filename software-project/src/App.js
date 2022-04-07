import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import View from './components/View';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

{/*const Login = lazy(() => import('./components/Login'));*/}

function App() {
  
  return (
    <Router>
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/view" element={<View />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
 
    </Router>
  );
}

export default App;
