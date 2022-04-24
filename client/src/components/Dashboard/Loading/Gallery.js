import React from "react";

function Gallery() {
  return (
    <div>
      <div className="space-y-3 mb-8 animate-pulse mt-10">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
          <div className="h-72 w-full bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
