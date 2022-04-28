import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBS49ZX2JH3o1nzafdz24AGfM5TUcXqEdI",
    authDomain: "dorethy-s-somecrust.firebaseapp.com",
    projectId: "dorethy-s-somecrust",
    storageBucket: "dorethy-s-somecrust.appspot.com",
    messagingSenderId: "968918896014",
    appId: "1:968918896014:web:50c56448b441e49f4f68df"
  };

  // initialize firebase
  const app =firebase.initializeApp(firebaseConfig);
  // connect notes component to the database
  const databaseRef = firebase.database().ref()
  export const noteRef = databaseRef.child('notes');
  // connect file upload component to the database
  export const storage_bucket = getStorage(app)
  export const auth = getAuth(app);
export default firebase;