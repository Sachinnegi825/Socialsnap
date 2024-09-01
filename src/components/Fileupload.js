import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUploadstate, setUserpost } from "../utils/UserSlice";

const Fileupload = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Add New Post
        </h2>

        <input
          type="file"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2.5 mb-4"
        />

        {file && (
          <div className="mb-4">
            <img
              src={file}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg shadow-sm"
            />
          </div>
        )}

        {/* New input field for comment */}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Add a comment..."
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2.5 mb-4"
          rows="3"
        ></textarea>

        <div className="flex justify-between">
          <button
            className="w-full mr-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => {
              dispatch(
                setUserpost({
                  postImage: file,
                  postCaption: caption, // Use comment state here
                })
              );

              dispatch(setUploadstate());
            }}
          >
            Upload
          </button>
          <button
            className="w-full ml-2 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            onClick={() => dispatch(setUploadstate())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fileupload;
