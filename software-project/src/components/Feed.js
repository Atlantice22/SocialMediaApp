import {React, useEffect} from 'react'
import Post from './Post.js'

function Feed() {
  return (
    <div class>
      <div className="rounded col-span-4 border bg-gray-100 border-gray-primary mb-12 w-1/2">
        <Post />
        <Post />
        <Post />
      </div>

    </div>
  )
}

export default Feed