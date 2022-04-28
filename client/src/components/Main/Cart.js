import React from "react";

function Cart({
  index,
  image,
  productName,
  price,
  category,
  catalog,
  featured,
}) {
  function gprice(t) {
    const p = new Intl.NumberFormat("idr", {
      style: "currency",
      currency: "IDR",
    }).format(t);

    return p;
  }

  return (
    <div
      key={index}
      className="relative hover:border-blue-500 h-[22rem] border duration-300 p-4 rounded-md space-y-2 group"
    >
      <img
        src={process.env.REACT_APP_URL_IMAGE + image[0]}
        alt={process.env.REACT_APP_URL_IMAGE + image[0]}
        className="rounded-md w-full h-[10rem] scale-95 group-hover:scale-90 duration-300"
      />
      <h1 className="font-medium text-lg leading-6 ">{productName}</h1>
      {featured && (
        <h1 className="font-medium text-md leading-6 bg-yellow-100 px-1 rounded-md text-black absolute top-3 left-5">
          Unggulan
        </h1>
      )}
      <h1 className="font-bold text-md">{gprice(price)}</h1>
      <div className="space-y-1">
        <div className="flex justify-start">
          <h1 className="font-medium text-base px-3 whitespace-nowrap text-slate-500 bg-slate-100 rounded-md ">
            {category}
          </h1>
        </div>
        <div className="flex justify-start">
          <h1 className="font-medium text-base px-3 whitespace-nowrap text-slate-500 bg-slate-100 rounded-md ">
            {catalog}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
