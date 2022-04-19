import React from "react";

function Category() {
  return (
    <>
      <div className="space-y-3 mb-8 animate-pulse">
        <div className="h-10 w-72 bg-gray-100 rounded-md" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
        </div>
      </div>

      <div className="space-y-3 mb-8 animate-pulse">
        <div className="h-10 w-72 bg-gray-100 rounded-md" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
          <div className="h-52 w-full bg-gray-100 rounded-md" />
        </div>
      </div>
    </>
  );
}

export default Category;
