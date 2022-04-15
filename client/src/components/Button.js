import React from "react";

function Button({ name, ...rest }) {
  return (
    <button
      {...rest}
      type="submit"
      className="h-10 w-full bg-[#00E6B3] hover:bg-[#11D8AC] duration-300 rounded-md"
    >
      <h1 className="text-md text-gray-700 font-medium">{name}</h1>
    </button>
  );
}

export default Button;
