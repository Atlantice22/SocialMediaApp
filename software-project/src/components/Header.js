import { React, useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import firebaseContext from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import {auth, db} from '../firebase/firebaseConfig';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { useRecoilState} from 'recoil';
import { modalState } from '../atoms/ModalAtom';

function Header() {

  const { firebase } = useContext(firebaseContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useRecoilState(modalState);
  
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
              <Link to={"/dashboard"}>
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Home" className="h-8 w-1/8 align-middle " />
              </Link>
            </h1>
          </div>
          
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                 {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png" classname="h-1 w-1 text-gray-500"/>  */}
              </div>
              <input className="bg-gray-50 h-8 block w-full pl-10 sm:text-sm border-gray-30 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
            </div>
          
          <div className="text-gray-700 text-center flex items-center align-items space-x-6 ">

          <h1 className="flex justify-center w-full">
              <Link to={"/dashboard"}>
                <img src="https://cdn-icons-png.flaticon.com/512/63/63633.png?w=360" alt="Home" className="h-8 align-middle " />
              </Link>
            </h1>
          
          <h1 className="flex justify-center w-full">
             
                <img src="https://cdn-icons-png.flaticon.com/512/5822/5822006.png" onClick={() => setOpen(true)} alt="Add post" className="h-8   align-middle cursor-pointer" />
              
            </h1>
            <h1 className="flex justify-center w-full">
              
                <img src="https://cdn-icons-png.flaticon.com/512/5883/5883507.png" alt="Messages" className="h-8   align-middle " />
              
            </h1>

            

                <button type="button" title="Sign Out" className="font-bold" onClick={() => {
                    signOut(auth);
                    navigate("/login");
                  }}>
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                
                <img
                        className="rounded-full h-10 w-10 flex"
                        src={user.photoURL}
                        alt="Profile picture"
                        
                      />
              
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header