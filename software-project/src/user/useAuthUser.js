import { React, useState, useEffect, useContext } from 'react'
import firebaseContext from '../firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {storage} from '../firebase/firebaseConfig'



export default function useAuthUser() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(firebaseContext);
  const auth = getAuth();

  useEffect(() => {
      const listener = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem('authUser');
          setUser(null);
        }
      });
  
      return () => listener();
    }, [firebase]);
  
  return {user}
}

