import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Signin = () => {
  const [auth, setAuth] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const value = useSelector((store) => store.user.userdetails);

  const handleSubmit = () => {
    if (Password === "" || Username === "") {
      alert("username and password should not be empty");
    } else if (Username !== value.name) {
      alert("Username is incorrect.Please input Correct credentials");
    } else if (Password !== value.password) {
      alert("Password is incorrect.Please input Correct credentials");
    } else setAuth(true);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-[36rem] mx-auto mt-48 bg-blue-400 p-10 text-center">
        <h1 className="text-4xl font-bold">SIGNIN FORM</h1>

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

        <Link to={`${auth ? "/" : ""}`}>
          <button
            className="bg-white text-blue-600 font-bold p-2 rounded-2xl hover:bg-blue-600 hover:text-white"
            onClick={handleSubmit}
            type="submit"
          >
            SignIn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
