import React, {useState} from 'react'
// import {noteRef} from '../util/connection';
import {projectFirestore} from "../util/connection"

 function CreateNotes() {
 const [note, setNote] = useState('');

 const createNote = (e) => {
     let entry = e.target.value
     e.preventDefault();
     setNote(entry);
     
     const collectionNotes = projectFirestore.collection('notes');
     collectionNotes.add(note)
     setNote('')
 }
 return(
     <div>
         <h1>leave a note</h1>
     <form onSubmit={createNote}>
         <input type= 'text' value = {note} onChange= {(e) => setNote(e.target.value)} placeholder = "Leave a note" />
     </form>
     </div>
 )
}
export default CreateNotes