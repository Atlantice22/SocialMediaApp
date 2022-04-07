import { React, useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import firebaseContext from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import {auth, db} from '../firebase/firebaseConfig';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";


function Header() {

  const { firebase } = useContext(firebaseContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = db.collection('users').get()
      setUsers(usersCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchUsers();
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={"/profile"}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" className="h-10 w-1/8 align-middle" />
              </Link>
            </h1>
          </div>
          <div className="flex items-center">
            <p>
              {user.uid}
            </p>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">

                <button type="button" title="Sign Out" onClick={() => {
                    signOut(auth);
                    navigate("/login");
                  }}>
                  Sign out
                </button>
                
              
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header