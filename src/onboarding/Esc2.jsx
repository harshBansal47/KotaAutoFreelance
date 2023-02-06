import React from "react";
import Buttonstyled from "../Components/Buttonstyled";
import TextHeading from "../Components/TextHeading";
import Resource from "../assets/Resource";
import { NavLink } from "react-router-dom";
const Esc2 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col sm:w-10/12">
        <div className="w-full h-72 flex justify-center items-center">
          <img
            style={{ boxShadow: "0px 10px 20px 2px rgba(0,255,255,0.7)" }}
            className="w-full sm:w-2/6 max-h-full rounded-3xl"
            src={Resource.imgs.img2}
          />
        </div>

        <TextHeading heading={Resource.headings.h_2} />
        <NavLink to="/page3">
          <Buttonstyled name="Next" />
        </NavLink>
      </div>
    </div>
  );
};
export default Esc2;