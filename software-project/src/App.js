import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PostUpload from './components/PostUpload';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { lazy } from 'react';
import userAuth from './user/userAuth';
import userContext from './user/userContext';

{/*const Login = lazy(() => import('./components/Login'));*/}
//const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  
  

  return (
    <RecoilRoot>
    <Router>
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<PostUpload />} />
    </Routes>
 
    </Router>
    </RecoilRoot>
  );
}

export default App;
