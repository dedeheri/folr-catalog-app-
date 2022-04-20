import React from "react";

function Form({ placeholder, type, error, message, ...rest }) {
  return (
    <div className="space-y-1 w-full">
      <div
        className={`border  rounded-md hover:border-black duration-300   ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none px-3 w-full read-only:bg-gray-100 rounded-md bg-transparent h-10 "
          {...rest}
        />
      </div>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default Form;
