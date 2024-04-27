import React from "react";

function TextField(props) {
  return (
    <div className="me-2 ">
      {props.label && (
        <label
          for="default-input"
          className="block mb-2 text-sm text-white font-bold dark:text-white"
        >
          {props.label}
        </label>
      )}
      <input
        className="px-2 py-1 text-md placeholder:text-md w-full border border-solid border-neutral-80 rounded focus:border-primary-40 outline-none disabled:border-neutral-80 disabled:bg-transparent "
        {...props}
      />
    </div>
  );
}

export default TextField;
