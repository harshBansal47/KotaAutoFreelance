import React from 'react'

const Buttonstyled = (props) => {
  return (
    <button className="rounded-md flex justify-center bg-fuchsia-800 px-4 py-3 mt-4 text-white font-medium text-xl w-80 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-0 focus:opacity-95">
      {props.name}
    </button>
  );
}

export default Buttonstyled;