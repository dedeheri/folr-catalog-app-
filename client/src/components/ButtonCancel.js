import React from "react";
import { Link } from "react-router-dom";

function ButtonCancel({ link, name }) {
  return (
    <Link className="w-full" to={link}>
      <div className="h-10 border pt-2 rounded-md hover:border-slate-600 duration-300">
        <h1 className="text-md font-medium text-center text-black">{name}</h1>
      </div>
    </Link>
  );
}

export default ButtonCancel;
