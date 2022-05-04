import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header.js'

function Post() {

    

  return (
    <div>
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/dashboard`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg`}
            
          />
          <p className="font-bold">user</p>
        </Link>
      </div>
    </div>
    <img src={'https://geek.justjoin.it/wp-content/uploads/2021/09/React_Native_Logo.png'}  />
    <div className="p-4 pt-2 pb-1">
      <span className="mr-1 font-bold">user</span>
      <span className="italic">Test post caption</span><br />
      <span className="italic">Timestamp</span><br />
    </div>
    <div className="p-4 pt-1 pb-4">
        
            <span className="mr-1 font-bold">user</span>
            
            <span>Comment</span>
        
        <br />
          <button
            className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none"
            type="button"
          >
            View more comments
          </button>
        

      </div>
    </div>
  )
}

export default Post