import React from "react";

function Select(props) {
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
      <select
        className="px-2 py-1.5 text-md placeholder:text-md w-full border border-solid border-neutral-80 rounded focus:border-primary-40 outline-none disabled:border-neutral-80 disabled:bg-transparent"
        value={props.value}
        onChange={props.onChange}
      >
        <option value={""} disabled>
          Choose a country
        </option>
        {props.countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
