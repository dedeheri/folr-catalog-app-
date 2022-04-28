import React from "react";

function Cart() {
  const loading = (
    <div className="border p-5 space-y-2 rounded-md">
      <div className="w-full h-48 rounded-md bg-gray-100" />
      <div className="w-full h-6 rounded-md bg-gray-100" />
      <div className="w-full h-6 rounded-md bg-red-100" />
      <div className=" space-x-2 flex">
        <div className="w-full h-6 rounded-md bg-blue-100" />
        <div className="w-full h-6 rounded-md bg-blue-100" />
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="w-[17rem] h-8 rounded-md bg-gray-100" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-pulse">
        {loading}
        {loading}
        {loading}
        {loading}
        {loading}
      </div>
    </div>
  );
}

export default Cart;
