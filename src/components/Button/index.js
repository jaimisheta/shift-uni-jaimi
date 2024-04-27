import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className="h-max capitalize rounded-md font-semibold disabled:pointer-events-none text-white text-md px-2 py-1  !bg-blue-600 hover:!bg-blue-700 disabled:text-gray-500 disabled:!bg-grtext-gray-500 disabled:!bg-opacity-10 disabled:text-opacity-40"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
