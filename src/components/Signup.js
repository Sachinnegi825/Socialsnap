import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserdetails } from "../utils/UserSlice";
import { Link } from "react-router-dom";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      setUserdetails({
        name: Username,
        password: Password,
      })
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-[36rem] mx-auto mt-48 bg-blue-400 p-10 text-center">
        <h1 className="text-4xl font-bold">SIGNUP FORM</h1>

        <input
          className="border-2 border-gray-600 w-72 mx-auto my-4"
          onChange={(e) => setUsername(e.target.value)}
          value={Username}
          type="text"
          placeholder="input your name...."
          required
        />

        <input
          className="border-2 border-gray-600 w-72 mx-auto mb-4"
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
          placeholder="input your password....."
          type="password"
          required
        />
        <Link to={"/signin"}>
          <button
            className="bg-white text-blue-600 font-bold p-2 rounded-2xl hover:bg-blue-600 hover:text-white"
            onClick={handleSubmit}
            type="submit"
          >
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
