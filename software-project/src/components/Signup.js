import { React, useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import firebaseContext from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {auth, db} from '../firebase/firebaseConfig';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

function Signup() {

  const navigate = useNavigate();
  const { firebase } = useContext(firebaseContext);
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = username === '' || password === '' || emailAddress === '';

  const handleSignup = async (event) => {

    event.preventDefault();

    try{
      const createdUserResult = await createUserWithEmailAndPassword(auth, emailAddress, password);
      

      const docRef = addDoc(collection(db, "users"), {
        userId: createdUserResult.user.uid,
        followers: [],
        following: [],
        profilePicture: '',
        emailAddress: emailAddress,
        username: username,
      });
    
      console.log("Document written with ID: ", docRef.id);

      navigate('/dashboard');
    
  }
    
    catch (error) {
      setUsername('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen grid place-items-center">
    <div className="flex flex-col w-2/5">
      <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex justify-center w-full">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
        </h1>

        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

        <form onSubmit={handleSignup} method="POST">
        <input
            type="text"
            placeholder="Enter your username"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({target}) => setUsername(target.value)}
            value={username}
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({target}) => setEmailAddress(target.value)}
            value={emailAddress}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({target}) => setPassword(target.value)}
            value={password}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className="bg-blue-500 text-white w-full rounded h-8 font-bold disabled:opacity-50"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm">
          Already have an account?{` `}
          <Link to="/login" className="font-bold">Login</Link>
         
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup