import React from "react";

import { CgSpinner } from "react-icons/cg";

function Spin() {
  return (
    <div className="h-10 w-full cursor-wait flex justify-center center bg-slate-700 hover:bg-slate-600 duration-300 rounded-md">
      <CgSpinner fontSize={24} color="white" className="animate-spin mt-2" />
    </div>
  );
}

export default Spin;
