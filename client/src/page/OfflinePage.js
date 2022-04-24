import React from "react";
import Button from "../components/Button";

function OfflinePage() {
  function reload() {
    window.location.reload();
  }
  return (
    <div className="grid justify-items-center items-center h-screen">
      <div className="center">
        <h1 className="text-center mt-10 font-semibold text-2xl mb-10 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            className="w-20 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            />
          </svg>
          Anda sedang offline
        </h1>
        <Button onClick={reload} name={"Retry"} />
      </div>
    </div>
  );
}

export default OfflinePage;
