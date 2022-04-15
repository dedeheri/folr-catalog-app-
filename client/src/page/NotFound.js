import React from "react";

// image
import { notfound } from "../image";

function NotFound() {
  return (
    <div className="grid justify-items-center items-center h-screen">
      <div className="center">
        <img src={notfound} className="w-96 h-96 mx-auto" />
        <h1 className="text-center mt-10 font-semibold text-2xl text-gray-500">
          Halaman tidak dapat ditemukan
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
