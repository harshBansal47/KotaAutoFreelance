import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { MdTextsms, MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Resource from '../../assets/Resource';
import Buttonstyled from '../../Components/Buttonstyled';

const ForgotPassword = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col p-3">
      <div className="flex justify-start items-center w-full">
        <BsArrowLeft className="text-4xl sm:text-5xl font-bold" />
        <span className="text-3xl font-sans font-semibold pl-5">
          Forgot password
        </span>
      </div>
      <div className="w-full h-48 flex justify-center items-center my-8">
        <img
          className=" w-64 rounded-3xl"
          src={Resource.imgs.forgetpasswordimg}
        />
      </div>
      <div className="text-lg py-4">
        Select which detail we use to reset your password
      </div>
      <div className="flex  items-center  w-11/12 p-3 shadow rounded-2xl my-3 hover:ring-2 hover:ring-slate-900 sm:w-2/6 hover:bg-slate-300">
        <div className="p-4 bg-slate-200 rounded-full mr-5">
          <MdTextsms className="text-4xl sm:text-5xl font-bold  rounded-full" />
        </div>
        <h1 className="text-lg text-gray-700">via Sms</h1>
      </div>
      <div className="flex  w-11/12 items-center p-3 shadow rounded-2xl my-3 hover:ring-2 hover:ring-slate-900 sm:w-2/6 hover:bg-slate-300">
        <div className="p-4 bg-slate-200 rounded-full mr-5">
          <MdEmail className="text-4xl sm:text-5xl font-bold rounded-full" />
        </div>
        <h1 className="text-lg text-gray-700">via Email</h1>
      </div>
      <NavLink to = "/otp"> <Buttonstyled name="Continue" /></NavLink>
    </div>
  );
}
export default ForgotPassword;