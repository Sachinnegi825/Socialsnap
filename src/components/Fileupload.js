import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setUploadstate, setUserpost } from "../utils/UserSlice";

const Fileupload = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="absolute bottom-96 lg:bottom-48 z-30 bg-white h-96 w-[28rem] right-28 sm:right-44 md:right-16 lg:right-[34rem]">
      <div className="w-[30rem] h-[27rem] text-center shadow-xl border-2 border-black">
        <h2>ADD POST</h2>
        <input type="file" onChange={handleChange} className="text-4xl" />
        <button
          className="my-3 bg-black text-white p-2 rounded-xl hover:bg-white hover:text-black"
          onClick={() => {
            dispatch(setUserpost(file));
            dispatch(setUploadstate());
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Fileupload;
