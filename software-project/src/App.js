import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

{/*const Login = lazy(() => import('./components/Login'));*/}

function App() {
  
  return (
    <Router>
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
 
    </Router>
  );
}

export default App;
