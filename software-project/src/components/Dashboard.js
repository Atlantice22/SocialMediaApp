import React from 'react'
import Header from './Header.js'
import Feed from './Feed.js'

function View() {
  return (
    <div className="bg-gray-100 h-auto">
    <Header />
    <div className="bg-gray-100 h-auto items-center">
    <Feed />
    </div>
    
    </div>
  )
}

export default View