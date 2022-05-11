import {React, useEffect} from 'react'
import Header from './Header.js'
import Feed from './Feed.js'
import Modal from './Modal.js'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

function View() {

  return (
    <div className="bg-gray-100 h-auto">
    <Header />
    <div className="bg-gray-100 h-auto items-center">

    <Feed />
    <Modal />
    </div>
    
    </div>
  )
}

export default View