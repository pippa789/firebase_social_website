import React from "react";
// import CreateNotes from "./component/CreateNotes";
//import Test from './component/Test'
// import SignIn from './component/Login'
import Title from "./component/Title";
import {useState} from 'react'
import Uploadform from "./component/UploadForm";
import ImageGrid from './component/ImageGrid'
import Modal from './component/modal'
import CreateNotes from "./component/CreateNotes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar";
import About from './component/about'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    
    
    <Router>
      {/* <SignIn /> */}
     <Routes>
     <Route  exact path = "/About" element = {<About/>} />
     </Routes>
  
    <NavBar />
    <Title />
    <Uploadform />
    <ImageGrid setSelectedImg={setSelectedImg} />
     { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </Router>
    
  );
}

export default App;
