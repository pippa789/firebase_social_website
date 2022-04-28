import React from "react";
import CreateNotes from "./component/CreateNotes";
import Test from './component/Test'
// import SignIn from './component/Login'
//import UploadImage from "./component/UploadImage";

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      <h1>Any old photo's? Upload them here</h1>
      <Test />
      <CreateNotes />
    </div>
  );
}

export default App;
