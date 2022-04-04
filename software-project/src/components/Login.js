import { React, useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import firebaseContext from '../firebase/firebase';
 
function Login() {

  const handleLogin = () => {};

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen grid place-items-center">
    <div className="flex flex-col w-2/5">
      <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex justify-center w-full">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
        </h1>

        <form onSubmit={handleLogin} method="POST">
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          />
          <input
            type="text"
            placeholder="Enter your password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full rounded h-8 font-bold"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm">
          Don't have an account?{` `}
            Sign up
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login