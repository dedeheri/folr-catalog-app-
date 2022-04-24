import React, { useState } from "react";

// icons
import { BiSearch } from "react-icons/bi";

function Search() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div className="border  flex items-center h-9 md:h-10 hover:border-black duration-300 rounded-md">
        <input
          onClick={() => setShow(true)}
          className="outline-none w-44 md:w-64 px-4"
        />
        <div className="bg-gray-100 w-14 h-full pl-4 flex items-center rounded-r-md">
          <BiSearch fontSize={20} />
        </div>
      </div>
      {show && (
        <div className="absolute border top-10 rounded-md bg-white shadow-sm overflow-y-scroll w-full p-4">
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
        </div>
      )}
    </div>
  );
}

export default Search;
