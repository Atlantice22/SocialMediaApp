import { collection } from 'firebase/firestore';
import React, { useState } from 'react'
import Header from './Header.js'
import {auth, db} from '../firebase/firebaseConfig';
import { doc, setDoc, addDoc } from "firebase/firestore";
import firebaseContext from '../firebase/firebase.js';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { setUserId } from 'firebase/analytics';

function PostUpload() {


    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
     const auth = getAuth();
    const user = auth.currentUser; 

   // The user object has basic properties such as display name, email, etc.
   

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
   // you have one. Use User.getToken() instead.
  


    const handleChange = (e) => {
        if(e.target.files[0])
        setImage(e.target.files[0]);
    }

    const handleUpload = () => {
        const docRef = addDoc(collection(db, "posts"), {
            timestamp: serverTimestamp(),
            image: "x",
            userId: user.uid
           
          });
    }

  return (
    <div>
        <Header />
        <div className="rounded col-span-4 border bg-gray-100 border-gray-primary mb-12 w-1/2">
        <input type="text" placeholder="Enter a caption" onChange={({target}) => setCaption(target.value)} value={caption} />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>
            Upload
        </button>
        <span> Ok </span>
      </div>

    </div>
  )
}

export default PostUpload