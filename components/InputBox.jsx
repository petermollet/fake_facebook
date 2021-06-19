import { useRef, useState } from "react"
import Image from "next/image"
import { session, useSession } from "next-auth/client"
import { VideoCameraIcon, EmojiHappyIcon, CameraIcon } from "@heroicons/react/solid"
import firebase from 'firebase'
import { db, storage } from "../firebase"


const InputBox = () => {

    const [session, loading] = useSession()
    const inputRef = useRef()
    const filePickerRef = useRef()
    const [imageToPost, setImageToPost] = useState(null)

    const sendPost = (e) => {
        e.preventDefault()
        if(!inputRef.current.value) return;
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            avatar: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if(imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')
                removeImage()
                uploadTask.on(
                    'state_change',
                    null, 
                    (error) => console.log(error),
                    () => {
                        storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                            db.collection('posts').doc(doc.id).set({
                                postImage: url
                            }, { merge: true })
                        })
                    }
                )
            }
        })
        inputRef.current.value = ""
    }

    const addImageToPost = (e) => {
        if(!e.target.files[0]) return;
        if (!['image/jpeg', 'image/png'].includes(e.target.files[0]['type'])) return;
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
            e.target.value = null
        }
    }

    const removeImage = () => setImageToPost(null)

    return ( 
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input 
                        type="text" 
                        placeholder={`What's on your mind, ${session.user.name} ?`}
                        ref={inputRef}
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 
                    transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt='' />
                        <p className="text-xs text-red-500 text-center" >Remove</p>
                    </div>
                )}
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="input-icon" title="Doesn't work :(">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">
                        Live Video
                    </p>
                </div>

                <div onClick={() => filePickerRef.current.click()} className="input-icon" title="Works :)">
                    <CameraIcon className="h-7 text-green-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">
                        Photo/Video
                    </p>
                    <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden />
                </div>

                <div className="input-icon" title="Doesn't work :(">
                    <EmojiHappyIcon className="h-7 text-yellow-500" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default InputBox;


// const BtnInputBox = ({Icon, color, name}) => (
//     <div className="input-icon">
//         <Icon className={`h-7 text-${color}-500`}/>
//         <p className="text-xs sm:text-sm xl:text-base">
//             {name}
//         </p>
//     </div>
// )