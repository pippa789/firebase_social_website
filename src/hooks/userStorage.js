import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../util/connection";
import  "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
     // reference to where file should be saved creating a ref inside firebase storage
     const storageRef = projectStorage.ref(file.name) 
     // uploads file to firestore and takes a snapshot of the upload.
     const collectionRef = projectFirestore.collection('images')
     storageRef.put(file).on( 'state_changed', (snap) => {
    // Track progress
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
     }, (err) => {
         setError(err);
     }, async() => {
         const url = await storageRef.getDownloadURL();
         const createdAt = timestamp();
         await collectionRef.add({url, createdAt})
         setUrl(url, createdAt);
     })
     
     console.log( 'running twice userStorage')
    }, [file]);

    return { progress, url, error }
}
export default useStorage;