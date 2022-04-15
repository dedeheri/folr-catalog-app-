import React from "react";

function Sidebar({ children }) {
  return <div className=" hidden md:block">{children}</div>;
}

export default Sidebar;
