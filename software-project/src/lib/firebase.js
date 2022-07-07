import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyA3aDYW63opunjlo8c207HAH_7IhUEm8zM',
  authDomain: 'project-978d9.firebaseapp.com',
  projectId: 'project-978d9',
  storageBucket: 'project-978d9.appspot.com',
  messagingSenderId: '99848230772',
  appId: '1:99848230772:web:c87c250c612d656ceb7e21'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
const storage = Firebase.storage();



export { firebase, FieldValue, storage };
