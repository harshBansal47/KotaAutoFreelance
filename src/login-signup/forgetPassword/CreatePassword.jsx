import React, { useState } from "react";
import Resource from "../../assets/Resource";
import { CiMail } from "react-icons/ci";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Buttonstyled from "../../Components/Buttonstyled";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const CreatePassword = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col p-3">
      <div className="flex justify-start items-center w-full">
        <BsArrowLeft className="text-4xl sm:text-5xl font-bold" />
        <span className="text-3xl font-sans font-semibold pl-5">
          Create new password
        </span>
      </div>
      <div className="w-full h-48 flex justify-center items-center my-8">
        <img className=" w-64 rounded-3xl" src={Resource.imgs.confPassImg} />
      </div>
      <div className="text-lg py-4">Create your new password</div>
      <div className="flex flex-col items-center">
        <div className="rounded-md shadow-sm bg-gray-100 p-3 focus:border-indigo-500 focus:ring-indigo-500 flex items-center my-6 w-11/12">
          <span>
            <BiLockAlt className="text-3xl " />
          </span>
          <input
            type={visible ? "text" : "password"}
            placeholder="enter new password"
            id="password"
            name="password"
            className=" block w-full pr-7 pl-5 sm:text-sm bg-transparent text-lg border-0 outline-0"
          />
          <span onClick={() => setVisible(!visible)}>
            {visible ? (
              <AiOutlineEyeInvisible className="text-3xl" />
            ) : (
              <AiOutlineEye className="text-3xl" />
            )}
          </span>
        </div>
        <div className="rounded-md shadow-sm bg-gray-100 p-3 focus:border-indigo-500 focus:ring-indigo-500 flex items-center my-6 w-11/12">
          <span>
            <BiLockAlt className="text-3xl " />
          </span>
          <input
            type={visible ? "text" : "password"}
            placeholder="confirm new password"
            id="password"
            name="password"
            className=" block w-full pr-7 pl-5 sm:text-sm bg-transparent text-lg border-0 outline-0"
          />
          <span onClick={() => setVisible(!visible)}>
            {visible ? (
              <AiOutlineEyeInvisible className="text-3xl" />
            ) : (
              <AiOutlineEye className="text-3xl" />
            )}
          </span>
        </div>
        <NavLink to="/login">
          <Buttonstyled name="Continue" />
        </NavLink>
      </div>
    </div>
  );
};

export default CreatePassword;
