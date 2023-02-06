import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Buttonstyled from "../../Components/Buttonstyled";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

const Register = () => {
    const [visible, setVisible] = useState(false);
    return (
      <div className="flex flex-col justify-center items-center p-4 h-screen">
        <div className="w-full">
          <BsArrowLeft className="text-4xl sm:text-5xl font-bold" />
        </div>
        <h1 className="text-slate-900 text-4xl font-sans font-medium my-10 w-11/12 sm:text-center">
          Create your account
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-md shadow-sm bg-gray-100 p-3 focus:border-indigo-500 focus:ring-indigo-500 flex items-center w-11/12 sm:w-96">
            <span>
              <CiMail className="text-3xl" />
            </span>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              className=" block w-full pr-7 pl-5 sm:text-sm bg-transparent text-lg border-0 outline-0"
            />
          </div>
          <div className="rounded-md shadow-sm bg-gray-100 p-3 focus:border-indigo-500 focus:ring-indigo-500 flex items-center my-6 w-11/12 sm:w-96">
            <span>
              <BiLockAlt className="text-3xl " />
            </span>
            <input
              type={visible ? "text" : "password"}
              placeholder="password"
              id="password"
              name="password"
              className=" block w-full pr-7 pl-5 sm:text-sm bg-transparent text-lg border-0 outline-0 "
            />
            <span onClick={() => setVisible(!visible)}>
              {visible ? (
                <AiOutlineEyeInvisible className="text-3xl" />
              ) : (
                <AiOutlineEye className="text-3xl" />
              )}
            </span>
          </div>
          <Buttonstyled name="Sign Up" />
        </div>
        <div className="flex justify-center items-center my-4 sm:my-8">
          <span className="h-0.5 bg-gray-500 w-16"></span>
          <h1 className="text-xl px-4"> or continue with</h1>
          <span className="h-0.5 bg-gray-500 w-16"></span>
        </div>
        <div className="flex w-10/12 my-1 justify-around sm:w-2/5 ">
          <div className="p-5 outline-1 bg-slate-300 rounded-md w-20 hover:bg-slate-400 hover:border-2 sm:w-40 flex justify-center">
            <FaFacebook className="text-4xl sm:text-5xl font-bold" />
          </div>
          <div className="p-5 outline-1 bg-slate-300 rounded-md w-20 hover:bg-slate-400 hover:border-2 sm:w-40 flex justify-center">
            <GrGoogle className="text-4xl sm:text-5xl font-bold" />
          </div>
        </div>

        <h1 className="text-xl mt-5">
          Already have an account?{" "}
          <NavLink to = "/login">
            <span className="text-sky-900 hover:underline text-xl font-medium">
              Sign In
            </span>
          </NavLink>
        </h1>
      </div>
    );
};

export default Register;
