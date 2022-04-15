import React from "react";

function Form({ placeholder, type, error, message, ...rest }) {
  return (
    <div className="space-y-1">
      <div
        className={`border px-3 rounded-md hover:bg-gray-100 duration-300 ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none w-full bg-transparent h-10 "
          {...rest}
        />
      </div>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default Form;
