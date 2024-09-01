import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserdetails } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (Username === "" || Password === "") {
      alert("Username and password should not be empty.");
    } else if (Password.length < 5) {
      alert("Password should be at least 5 characters long.");
    } else {
      dispatch(
        setUserdetails({
          name: Username,
          password: Password,
          avatar: avatar,
        })
      );
      navigate("/signin");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Sign Up
        </h1>

        <div className="flex justify-center">
          <label className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white text-3xl"
                />
              )}
            </div>
          </label>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            type="text"
            placeholder="Enter your username"
            required
          />

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            placeholder="Enter your password"
            autoComplete="off"
            type="password"
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSubmit}
            type="button"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
