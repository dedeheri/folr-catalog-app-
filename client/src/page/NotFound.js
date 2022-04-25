import React from "react";

// image
import { notfound } from "../image";

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <img src={notfound} alt="not found" className="w-1/2 h-1/2 mx-auto" />
      <h1 className="font-medium text-2xl text-gray-500 text-center mt-5">
        Halaman tidak dapat ditemukan.
      </h1>
    </div>
  );
}

export default NotFound;
