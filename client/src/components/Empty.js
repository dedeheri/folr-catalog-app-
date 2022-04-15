import React from "react";

import { empty } from "../image";

function Empty() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <img src={empty} className="w-1/2 h-1/2 mx-auto" />
      <h1 className="font-medium text-2xl text-gray-500 text-center mt-5">
        Tidak ada data ditemukan
      </h1>
    </div>
  );
}

export default Empty;
