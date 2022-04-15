import React from "react";

import { logo } from "../../../image";
function Layout({ children }) {
  return (
    <div className="max-w-2xl mx-auto mt-20 ">
      <div className="border w-96 mx-auto mt-4 py-10 rounded-md">
        <img src={logo} className="mx-auto w-72" alt="logo" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
