import React from 'react'

const TextHeading = (props) => {
  return (
    <div
      className="text-center text-slate-900 text-4xl font-sans font-medium my-20 w-full rounded-3xl p-7"
    >
      {props.heading}
    </div>
  );
}
export default TextHeading;