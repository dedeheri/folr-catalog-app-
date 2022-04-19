import React from "react";

function Textarea({ error, message, placeholder, ...rest }) {
  return (
    <div className="space-y-1">
      <textarea
        {...rest}
        placeholder={placeholder}
        rows={3}
        className={`border p-2 w-full outline-none rounded-md hover:border-black duration-300 ${
          error ? "border-red-500" : ""
        }`}
      />
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default Textarea;
