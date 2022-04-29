import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// image
import { logo } from "../../image";
import Search from "./Search";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  function hideScroll() {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", hideScroll);
    }

    return () => {
      window.removeEventListener("scroll", hideScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`h-16 bg-white z-50 border-b flex items-center px-5 lg:px-28 justify-between fixed w-full top-0 duration-300 ease-in-out  ${
        scroll ? "-translate-y-full" : "translate-y-auto"
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
