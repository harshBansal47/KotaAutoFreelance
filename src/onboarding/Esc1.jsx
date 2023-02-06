import React from 'react'
import Buttonstyled from '../Components/Buttonstyled';
import TextHeading from '../Components/TextHeading';
import Resource from '../assets/Resource';
import { NavLink } from 'react-router-dom';
const Esc1 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col sm:w-10/12">
        <div className="w-full h-72 flex justify-center items-center">
          <img
            className="w-full sm:w-2/5 max-h-full rounded-3xl"
            style={{ boxShadow: "0px 10px 20px 2px rgba(0,255,255,0.7)" }}
            src={Resource.imgs.img1}
          />
        </div>
        <TextHeading
          heading={Resource.headings.h_1}
        />
        <NavLink to="/page2">
          <Buttonstyled name="Next" />
        </NavLink>
      </div>
    </div>
  );
}

export default Esc1