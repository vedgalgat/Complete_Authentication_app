import React, { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"

function Login() {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successful 🎉",{
          style:{
          background:"black",
          color:"red "
          }
        });
        console.log("Login Response:", data);


        setformdata({
          email: "",
          password: "",
        });
      } else {
        alert("Login Failed: " + data.message);


        setformdata({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background glowing circles */}
      <div className="absolute top-20 left-32 w-22 h-22 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-22 h-22 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/*  Modal Card */}
      <div className="relative z-10 bg-gray-900/40 backdrop-blur-lg border border-pink-500/20 rounded-2xl shadow-[0_0_40px_-10px_rgba(236,72,153,0.4)] w-full max-w-md p-15">
        <h2 className="text-4xl font-bold text-center mb-11 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-900/60 text-white rounded-lg border border-pink-500/40 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-900/60 text-white rounded-lg border border-pink-500/40 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 hover:cursor-pointer rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-pink-500/30"
          >
            Login
          </button>
        </form>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-400 hover:underline hover:text-pink-300 transition-all"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
