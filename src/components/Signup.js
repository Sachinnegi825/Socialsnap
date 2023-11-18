import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserdetails } from "../utils/UserSlice";
import { Link } from "react-router-dom";

const Signup = () => {
  const [auth, setAuth] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (Username === "" || Password === "") {
      alert("username and password filed should not be empty");
    } else if (Password.length < 5) {
      alert("password shoul be biiger than 5 alphabets");
    } else {
      dispatch(
        setUserdetails({
          name: Username,
          password: Password,
        })
      );
      setAuth(true);
    }
  };

  return (
    <div className="w-full">
      <div className=" w-[36rem] mx-auto mt-48 bg-blue-400 p-10 text-center">
        <h1 className="text-4xl font-bold">SIGNUP FORM</h1>
        <form action="" className="flex flex-col">
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
            autoComplete="off"
            type="password"
            required
          />
          {auth ? (
            <Link to={"/signin"}>
              <button
                className="bg-white text-blue-600 font-bold p-2 rounded-2xl hover:bg-blue-600 hover:text-white"
                onClick={handleSubmit}
                type="submit"
              >
                SignUp
              </button>
            </Link>
          ) : (
            <Link to={""}>
              <button
                className="bg-white text-blue-600 font-bold p-2 rounded-2xl hover:bg-blue-600 hover:text-white"
                onClick={handleSubmit}
                type="submit"
              >
                SignUp
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
