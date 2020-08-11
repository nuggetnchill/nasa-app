import React, { useState } from "react";

import MarsPhotoElement from "./MarsPhotoElement";
import NavBar from "./NavBar";
import Modal from "./Modal";

import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type='TailSpin' color='#fcfcfc' height='100' width='100' />
      </div>
    )
  );
};

const MarsPhoto = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <NavBar />
      <LoadingIndicator />
      <MarsPhotoElement setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default MarsPhoto;
