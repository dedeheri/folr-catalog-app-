import React from "react";

function Button({ name, ...rest }) {
  return (
    <button
      {...rest}
      type="submit"
      className="h-10 w-full  bg-slate-700 hover:bg-slate-600 duration-300 rounded-md"
    >
      <h1 className="text-md px-3 text-white font-medium whitespace-nowrap">
        {name}
      </h1>
    </button>
  );
}

export default Button;
