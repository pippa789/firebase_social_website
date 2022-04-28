import React, { useState, useEffect } from 'react';
import firebase from '../util/connection';
import {v4 as uuid} from 'uuid'



function UploadImage() {
    const ReadImages = async (e) => {
        const [ imageUrl, setImageUrl ] = useState();
        const file = e.target.files[0];
        const id = uuid();
        const storageRef = firebase.storage().ref('images').child(id);
        const imageRef = firebase.storage().ref('images').child('daily')

    await storageRef.put(file)
          imageRef.push(url)
          storageRef.getDownloadURL().then((url)=>{
           setImageUrl(url)
       })
        console.log(file)
    }
  return (
    <div>
       <h1>UploadImage</h1>
       <input type='file' accept='image/*' onChange={ReadImages} />
       <img src={imageUrl} alt=''/>
    </div>
  )
}

export default UploadImage