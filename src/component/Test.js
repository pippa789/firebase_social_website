import { storage_bucket } from "../util/connection";
import React from 'react'
import { ref, uploadBytesResumable } from 'firebase/storage';


export default function Test() {
  
// upload file to firebase
const uploadFile = (e) =>{
let selected = e.target.files[0];
console.log(selected)
// create a reference to the file to be uploaded
const fileRef = ref(storage_bucket, file.images);
// upload the file
const uploadTask = uploadBytesResumable(fileRef, file).child(file.png);
//track progress
uploadTask.on("state_changed", (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
})// get storage url and set it to the useState, setImageAsUrl. you probably need useEffect to do that.
    }
  
  return (
    <form>
    <input type = 'file' onChange={uploadFile} />
     
      </form>
  )
}
