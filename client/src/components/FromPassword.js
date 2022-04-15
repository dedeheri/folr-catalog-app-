import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function FormPassword({ placeholder, error, message, ...rest }) {
  const [show, setShow] = useState(true);

  return (
    <div className="space-y-1">
      <div
        className={`border px-3 rounded-md hover:bg-gray-100 duration-300 flex justify-between items-center ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          type={show ? "password" : "text"}
          placeholder={placeholder}
          className="outline-none w-full bg-transparent h-10 "
          {...rest}
        />

        {show ? (
          <div
            onClick={() => setShow(!show)}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <AiOutlineEyeInvisible
              fontSize={23}
              className="text-gray-400 cursor-pointer"
            />
          </div>
        ) : (
          <div
            onClick={() => setShow(!show)}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <AiOutlineEye
              fontSize={23}
              className="text-gray-400 cursor-pointer"
            />
          </div>
        )}
      </div>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default FormPassword;
