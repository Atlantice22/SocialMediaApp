/* eslint-disable no-nested-ternary */
import { useContext, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post';
import { firebase, FieldValue, storage } from '../lib/firebase';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { user: { following } = {} } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);
  const captionRef = useRef(null);
  const [caption2, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
 

  const handleUpload = async () => {
 

    await firebase.firestore().collection('photos').doc().set({
        caption: caption2,
        comments: [],
        dateCreated: Date.now(),
        imageSrc: imageUrl,
        likes: [],
        photoId: 4,
        userId: user.userId
    })
    .then(() => {
        console.log('Document successfully written!');
    })
    .catch((error) => {
        console.error('Error writing document: ', error);
    });
      
  }

  const uploadFiles =  async (file) => {
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on('state_changed', (snapshot) => {
      //
    }, 
    (error) => console.log(error),
    () => {
    storage.ref('files').child(file.name).getDownloadURL().then((url) => {
        console.log(url);
        setImageUrl(url);
        
      });
    
    });
    
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadFiles(file);
  }




  

  return (


    
    <div className="container col-span-2">
      <div className='font-bold text-gray-base ml-80'>Add post</div>
      <div  className='border bg-white border-gray-primary mb-12'>
      <input type="text" onChange={({target}) => setCaption(target.value)}
                                        value={caption2} className="border-none focus:ring-0 w-full text-center" placeholder="Enter a caption" /><br /><br />
      <form onSubmit={formHandler}>
      
      <input type='file' className='file ml-10' /><br /><br />
      <button type='submit' className='font-bold ml-10 bg-blue-medium font-bold text-sm rounded text-white w-20 h-8'>Upload</button><br /><br />
      </form>
      <button type='button' className='font-bold ml-10 bg-blue-medium font-bold text-sm rounded text-white w-20 h-8' onClick={handleUpload}>Upload2</button><br />
      </div>
      {following===undefined ?(
        <Skeleton count={2} width={640} height={500} className="mb-5" />
      ) : following.length===0 ?(
        <p className="flex justify-center font-bold">Follow other people to see Photos</p>
      ) : photos? (
       photos.map((content) => <Post key={content.docId} content={content} />)          
      ) : null}

      
    </div>
  );
}

