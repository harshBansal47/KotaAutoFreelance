import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Buttonstyled from '../../Components/Buttonstyled';

const Otp = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center p-3">
      <div className="h-5/6 flex flex-col justify-between items-center">
        <div className="flex justify-start items-center w-full">
          <BsArrowLeft className="text-4xl sm:text-5xl font-bold" />
          <span className="text-3xl font-sans font-semibold pl-5">
            Forgot password
          </span>
        </div>
        <div className="w-11/12 text-center">
          <h1 className="text-xl py-3">Code has been send to</h1>
          <div className="my-6 flex justify-between  items-center">
            <input
              type="text"
              maxLength="1"
              id="i1"
              className="border-0 outline-0 bg-gray-200 text-3xl text-center p-4 hover:outline-cyan-800 w-16 rounded "
            />
            <input
              type="text"
              maxLength="1"
              id="i2"
              className="border-0 outline-0 bg-gray-200 text-3xl text-center p-4 hover:outline-cyan-800 w-16 rounded"
            />
            <input
              type="text"
              maxLength="1"
              id="i3"
              className="border-0 outline-0 bg-gray-200 text-3xl text-center p-4 hover:outline-cyan-800 w-16 rounded"
            />
            <input
              type="text"
              maxLength="1"
              id="i4"
              className="border-0 outline-0 bg-gray-200 text-3xl text-center p-4 hover:outline-cyan-800 w-16 rounded"
            />
          </div>
          <h1 className="text-xl py-3">Resend code in 53 sec</h1>
        </div>
        <NavLink to="/createPass">
          <Buttonstyled name="verify" />
        </NavLink>
      </div>
    </div>
  );
}
export default Otp