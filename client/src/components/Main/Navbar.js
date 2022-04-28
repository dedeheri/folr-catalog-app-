import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// image
import { logo } from "../../image";
import Search from "./Search";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div
      className={`h-16 bg-white z-50 border-b flex items-center px-5 lg:px-28 justify-between fixed w-full top-0 ${
        scroll ? "shadow-md ease-in-out duration-300" : ""
      } `}
    >
      <Link to={"/"}>
        <img src={logo} alt={logo} className="w-32 md:w-36" />
      </Link>

      <Search />
    </div>
  );
}

export default Navbar;
