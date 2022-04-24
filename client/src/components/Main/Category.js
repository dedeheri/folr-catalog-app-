import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/action/main/category";

function Category() {
  const { data, loading } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // calling api
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  console.log(data);

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="font-medium text-3xl">Kategori</h1>
        <h1 className="font-medium text-xl text-blue-600">Lihat Semua</h1>
      </div>
      <div className="flex space-x-1  p-4 border w-full  rounded-md overflow-x-scroll">
        {data?.result?.map((c) =>
          c.catalog.slice(0, 4).map((v) => (
            <div className="border p-3 rounded-md  group space-y-5 hover:border-slate-500 duration-300 cursor-pointer">
              <img
                src={process.env.REACT_APP_URL_IMAGE + v.image}
                className="h-64 w-64 scale-95 group-hover:scale-100 duration-300"
              />
              <h1 className="font-medium text-2xl text-center">{v.catalog}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
