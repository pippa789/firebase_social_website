1//030797D-dvx07CgYIARAAGAMSNwF-L9IrCeIsrXG68O4i1J8QyDdvEqX-utJPwnyl6imM0y2B3SmEc__E_NMTzb_HykjH3EdcaS8

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
