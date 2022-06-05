import {app, db} from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

export async function doesUsernameExist(username){
    //const result = await db.collection('users').where('username', '==', username.toLowerCase()).get();
    const result = query(collection(db, "users"), where("username", "==", username.toLowerCase()));
    const querySnapshot = await getDocs(result);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });

    console.log(result);
    
    return querySnapshot.size > 0;
}