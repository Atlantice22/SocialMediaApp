import React, { Fragment, useRef, useState } from 'react'
import { modalState } from '../atoms/ModalAtom'
import { useRecoilState } from 'recoil'
import {Dialog, Transition } from '@headlessui/react'
import {auth, db, storage} from '../firebase/firebaseConfig';
import { doc, setDoc, collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { ref, getDownloadURL, uploadString, uploadBytes, uploadBytesResumable } from '@firebase/storage';

function Modal() {

    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const captionRef = useRef(null);
    const [caption, setCaption] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = getAuth();

    const uploadPost = async () => {
        if(loading){
            return;
        }
        setLoading(true);

        const docRef = await addDoc(collection(db, "posts"), {
                userId: auth.currentUser.uid,
                username: auth.currentUser.displayName,
                caption: caption,
                timestamp: serverTimestamp()
          });

          console.log("Document written with ID: ", docRef.id);

           const imageRef = await ref(storage, `posts/${docRef.id}/image`);



            await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
               const downloadURL = await getDownloadURL(imageRef);
               await updateDoc(doc(db, 'posts', docRef.id), {
                   image: downloadURL
              })
           });

          setOpen(false);
          setLoading(false);
          setSelectedFile(null);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
    }

  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>

            <div className="flex items-end justify-center h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
            

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden
                    shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        <div>
                            <div className="mx-auto flex items-center justify-center h-22 w-22 rounded-full  cursor-pointer">
                           
                                <div>
                                    {selectedFile ? (
                                        <img src={selectedFile} className="w-full object-contain cursor-pointer" alt="" onClick={() => setSelectedFile(null)} />
                                    ) : (
                                        <div onClick={() => filePickerRef.current.click()}  className="mt-3 text-center sm:mt-5">
                                    {/* <img
                                        className="rounded-full h-12 w-12 text-blue-600"
                                        src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg"
                                        alt="Profile picture"
                                        aria-hidden="true"
                                    /><br /> */}
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Upload a photo
                                        </Dialog.Title>
                                    
                                    <div>
                                        <input type="file" ref={filePickerRef} hidden onChange={addImageToPost} />
                                    </div>
                                    
                                </div>
                                    )}

                                    
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                            <div className="mt-2">
                                        <input type="text" onChange={({target}) => setCaption(target.value)}
                                        value={caption} className="border-none focus:ring-0 w-full text-center" placeholder="Enter a caption" />
                                    </div><br />
                                <button type="button"className="inline-flex justify-center w-full rounded-md border
                                border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white
                                hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm disabled:bg-gray-300
                                disabled:cursor-not-allowed hover:disabled:bg-gray-300" onClick={uploadPost}>
                                    {loading ? "Uploading..." : "Upload post"}
                                    </button>    
                            </div>  
                        </div>
                    </div>
                </Transition.Child>
            </div> 
        </Dialog>
    </Transition.Root>

    
  )
}

export default Modal