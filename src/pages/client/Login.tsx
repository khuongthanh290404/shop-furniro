import React from "react";
import { useForm } from "react-hook-form";
import { Users } from "../../interface/User";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm<Users>();
  const onSubmit = async (user: Users) => {
    const { data } = await axios.post("http://localhost:3000/api/login", user);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    nav("/");
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="w-full max-w-xl bg-white p-8 shadow-lg rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Login
          </h1>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {/* {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )} */}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {/* {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )} */}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
          {/* <div className="mt-3 text-center">
            <Link to={`/login`} className="text-blue-600 hover:underline">
              Already have an account? Log in
            </Link>
          </div> */}
        </form>
       
      </div>
    </div>
  );
};

export default Login;
