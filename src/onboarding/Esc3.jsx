import React from "react";
import Buttonstyled from "../Components/Buttonstyled";
import TextHeading from "../Components/TextHeading";
import Resource from "../assets/Resource";
import { NavLink } from "react-router-dom";
const Esc3 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col sm:w-10/12">
        <div className="w-full h-72 flex justify-center items-center">
          <img
            style={{ boxShadow: "0px 10px 20px 2px rgba(0,255,255,0.7)" }}
            className="w-full sm:w-1/4 max-h-full rounded-3xl"
            src={Resource.imgs.img3}
          />
        </div>
        <TextHeading heading={Resource.headings.h_3} />
        <NavLink to = "/register">
          <Buttonstyled name="Get started" />
        </NavLink>
      </div>
    </div>
  );
};
export default Esc3;
