import React, { useState } from "react";
import Title from "./comps/Title";
import FormUpload from "../src/comps/FormUpload";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <FormUpload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
