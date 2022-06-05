import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PostUpload from './components/PostUpload';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { lazy } from 'react';
import useAuthUser from './user/useAuthUser';
import userContext from './user/userContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';

{/*const Login = lazy(() => import('./components/Login'));*/}
//const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  
  const user = useAuthUser();

  return (
   <userContext.Provider value={{user}}>
    <RecoilRoot>
    <Router>
    
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<PostUpload />} />
      <Route path="/header" element={<Header />} />
    </Routes>
 
    </Router>
    </RecoilRoot>
    </userContext.Provider>
  );
}

export default App;