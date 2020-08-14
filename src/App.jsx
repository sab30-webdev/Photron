import React, { useState, Fragment } from "react";
import Title from "./comps/Title";
import FormUpload from "../src/comps/FormUpload";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./comps/Login";
import Logout from "./comps/Logout";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { isAuthenticated, user } = useAuth0();


  return (
    <Fragment>
      {!isAuthenticated ? (
        <Login />
      ) : (
        
        <div className="App">
          <Logout />
          <Title user={user} />
          <FormUpload />
          <ImageGrid
            setSelectedImg={setSelectedImg}
            userCollection={user.nickname}
          />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default App;
