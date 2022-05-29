import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import profile from '../styles/profile.css'

function Profile() {
  return (
    /*<div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={"/view"}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" className="mt-2 w-1/8 align-middle" />
              </Link>
            </h1>
          </div>
          */

    <div className='profile'>
      <header className='header'>
        <img src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg" alt='Profile Picture'></img>
        <h1>Username</h1>
        <div className='statusInfo'>
          <p>Post</p>
          <p>Followers</p>
          <p>Following</p>
        </div>
        <p className='Bio'>Bio</p>
      </header>
      <main className='container '>
        <div className='options'>
          <p>grid view</p>
          <p>list view</p>
        </div>
        <div className='images'>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt='Picture1'></img>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt='Picture2'></img>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt='Picture3'></img>
          </div>
      </main>

      <footer>
        <p>Copyright</p>
      </footer>
    </div>
  )
}

export default Profile