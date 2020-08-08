import React, { useState } from "react";

import MarsPhotoElement from "./MarsPhotoElement";
import NavBar from "./NavBar";
import Modal from "./Modal";

const MarsPhoto = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <NavBar />
      <MarsPhotoElement setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default MarsPhoto;
