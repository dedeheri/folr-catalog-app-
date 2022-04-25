import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="relative  h-screen font-roboto">
      <Navbar />

      <div className="max-w-[90rem] mx-auto px-4">
        <div className="space-y-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
