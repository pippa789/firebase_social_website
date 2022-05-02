import React from "react";
// import CreateNotes from "./component/CreateNotes";
//import Test from './component/Test'
// import SignIn from './component/Login'
import Uploadform from "./component/UploadForm";
import ImageGrid from './component/ImageGrid'

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      <h1>Any old photo's? Upload them here</h1>
      <Uploadform />
      <ImageGrid />
      {/* <CreateNotes /> */}
    </div>
  );
}

export default App;
