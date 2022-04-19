import React from "react";

function FormSpan({ placeholder, span, error, message, ...rest }) {
  return (
    <div className="space-y-1 w-full">
      <div
        className={`flex rounded-md border hover:border-black duration-300 ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="outline-none w-full bg-transparent h-10 px-3"
          placeholder={placeholder}
          {...rest}
        />
        <span className="inline-flex rounded-r-md items-center px-3 bg-gray-100 text-gray-500 text-sm">
          {span}
        </span>
      </div>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default FormSpan;
