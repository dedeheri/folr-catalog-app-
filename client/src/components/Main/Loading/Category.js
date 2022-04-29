import React from "react";

function Category() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="flex justify-between">
        <div className="w-56 h-8 bg-gray-100 rounded-md" />
      </div>

      {/* section 2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="h-56 w-full bg-gray-100 rounded-md" />
        <div className="h-56 w-full bg-gray-100 rounded-md" />
        <div className="h-56 w-full bg-gray-100 rounded-md" />
        <div className="h-56 w-full bg-gray-100 rounded-md" />
        <div className="h-56 w-full bg-gray-100 rounded-md" />
        <div className="h-56 w-full bg-gray-100 rounded-md" />
      </div>
    </div>
  );
}

export default Category;
