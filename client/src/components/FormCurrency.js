import React from "react";

import CurrencyInput from "react-currency-input-field";
function FormCurrency({ placeholder, error, message, span, ...rest }) {
  return (
    <div className="space-y-1">
      <div
        className={`flex rounded-md border hover:border-black duration-300 ${
          error ? "border-red-500" : ""
        }`}
      >
        <span className="inline-flex rounded-l-md items-center px-3 bg-gray-100 text-gray-500 text-sm">
          {span}
        </span>
        <CurrencyInput
          className="outline-none w-full bg-transparent h-10 px-3"
          id="input-example"
          name="input-name"
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default FormCurrency;
