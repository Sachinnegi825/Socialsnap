import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const value = useSelector((store) => store.user.userdetails);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (Password === "" || Username === "") {
      alert("Username and password should not be empty");
    } else if (Username !== value.name) {
      alert("Username is incorrect. Please input correct credentials");
    } else if (Password !== value.password) {
      alert("Password is incorrect. Please input correct credentials");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Sign In
        </h1>
        <div className="space-y-6">
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
            type="password"
            placeholder="Enter your password"
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSubmit}
            type="submit"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
