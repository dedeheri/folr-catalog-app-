import React from "react";

function Search() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="flex space-x-3">
        <div className="w-20 h-20 bg-gray-100 rounded-md" />
        <div className="space-y-2">
          <div className="w-96 h-7 bg-gray-100 rounded-md" />
          <div className="w-96 h-7 bg-slate-200 rounded-md" />
        </div>
      </div>

      <div className="flex space-x-3">
        <div className="w-20 h-24 bg-gray-100 rounded-md" />
        <div className="space-y-2">
          <div className="w-96 h-7 bg-gray-100 rounded-md" />
          <div className="w-96 h-7 bg-slate-200 rounded-md" />
        </div>
      </div>

      <div className="flex space-x-3">
        <div className="w-20 h-24 bg-gray-100 rounded-md" />
        <div className="space-y-2">
          <div className="w-96 h-7 bg-gray-100 rounded-md" />
          <div className="w-96 h-7 bg-slate-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Search;
