import React from "react";

import { CgSpinner } from "react-icons/cg";

function Spin() {
  return (
    <div className="h-10 w-full cursor-wait flex justify-center center bg-[#00E6B3] hover:bg-[#11D8AC] duration-300 rounded-md">
      <CgSpinner fontSize={24} className="animate-spin mt-2" />
    </div>
  );
}

export default Spin;
