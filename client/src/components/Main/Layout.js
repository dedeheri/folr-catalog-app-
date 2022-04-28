import React from "react";
import Navbar from "./Navbar";
import Image from "./Image";

function Layout({ children }) {
  return (
    <div className="relative  h-screen font-roboto">
      <Navbar />
      <Image />
      <div className="max-w-[80rem] mx-auto px-4 mt-24 md:mt-32">
        {children}
      </div>
    </div>
  );
}

export default Layout;
