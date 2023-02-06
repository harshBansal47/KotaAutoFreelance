import React from 'react';
import loading from '../assets/loading.jpg';
import top from '../assets/top.svg';
import bottom from '../assets/bottom.svg';
const Loading = () => {
  return (
    <div className="bg-white relative">
      <div className=" top-0  sm:hidden">
        <img src={top} />
      </div>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="sm:w-10/12 flex justify-center my-4">
          <img
            className="w-full sm:w-2/5"
            src={loading}
            style={{ boxShadow: "0px 10px 20px 2px rgba(0,255,255,0.7)" }}
          />
        </div>
        <div className="w-10/12 flex justify-center my-4">
          <iframe
            className="w-80 h-80"
            src="https://lottie.host/?file=83fdedc8-401e-4211-a5df-c7b7fcc4b19b/6RPqL3nx9l.json"
          ></iframe>
        </div>
      </div>
      {/* <div className="absolute bottom-0 z-10">
        <img src={bottom} />
      </div> */}
    </div>
  );
}
export default Loading;