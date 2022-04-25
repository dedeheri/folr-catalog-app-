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
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="font-medium text-3xl">Kategori</h1>
        <h1 className="font-medium text-xl text-blue-600">Lihat Semua</h1>
      </div>

      {loading ? (
        <div>Loading</div>
      ) : (
        <div class="flex overflow-x-scroll hide-scroll-bar scroll-smooth">
          <div class="flex flex-nowrap space-x-2">
            {data?.result?.map((c) =>
              c.catalog.map((v) => (
                <div class="inline-block ">
                  <div class="w-64 max-w-xs overflow-hidden border p-3 rounded-md  group space-y-2 hover:border-slate-500 duration-300 cursor-pointer">
                    <img
                      alt={process.env.REACT_APP_URL_IMAGE + v.image}
                      src={process.env.REACT_APP_URL_IMAGE + v.image}
                      className="h-56 w-full scale-95 group-hover:scale-100 duration-300"
                    />
                    <h1 className="font-medium text-2xl text-center">
                      {v.catalog}
                    </h1>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
