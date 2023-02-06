import React from 'react';
import welcomeimg from '../assets/welcome.jpg';

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${welcomeimg})` }}
      className="h-screen w-full bg-center bg-cover flex items-end sm:justify-center sm:items-center"
    >
      <div
        className="p-3 sm:px-5"
        style={{
          "boxShadow": "-1px -45px 87px 1px rgba(128,112,112,0.75) inset",
        }}
      >
        <h3 className="text-4xl sm:text-6xl text-white font-bold">Welcome to 👋</h3>
        <h1 className="text-7xl sm:text-9xl font-bold text-fuchsia-900 my-4 sm:text-yellow-100">Taxiee</h1>
        <p className="text-white text-xl font-bold">
          The best taxi booking app to make your day great
        </p>
      </div>
    </div>
  );
}

export default Home