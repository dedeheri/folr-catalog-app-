import React from "react";

function CardCategory({ title, image, hanldeQuery }) {
  return (
    <div
      onClick={() => hanldeQuery(title)}
      className="bg-gray-50 hover:bg-gray-100 duration-300 w-full h-56 rounded-md cursor-pointer p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="font-bold text-2xl text-gray-800">{title}</h1>
        <img
          src={process.env.REACT_APP_URL_IMAGE + image}
          alt={process.env.REACT_APP_URL_IMAGE + image}
          className="w-[11rem] h-[5rem] md:w-[11rem] md:h-[8rem] mt-9 md:mt-6"
        />
      </div>
    </div>
  );
}

export default CardCategory;
