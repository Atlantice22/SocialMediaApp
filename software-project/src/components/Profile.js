import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={"/view"}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" className="mt-2 w-1/8 align-middle" />
              </Link>
            </h1>
          </div>
  )
}

export default Profile