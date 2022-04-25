import React from "react";

// image
import { logo } from "../../image";
import Search from "./Search";

function Navbar() {
  return (
    <div className="h-16 z-50 border-b flex items-center px-5 lg:px-28 justify-between">
      <div>
        <img src={logo} alt={logo} className="w-32 md:w-36" />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
