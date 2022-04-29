import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getCategory } from "../../redux/action/main/category";

// redux
import CardCategory from "./CardCategory";
import CategoryLoading from "./Loading/Category";

function Category() {
  const {
    get: { data, loading },
  } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calling api
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  function hanldeQuery(c) {
    navigate({
      pathname: "/category",
      search: `${createSearchParams({
        category: c,
      })}`,
    });
  }

  function handleCategory() {
    navigate({
      pathname: "/category",
    });
  }

  return loading ? (
    <CategoryLoading />
  ) : (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Kategori</h1>
        <button
          onClick={handleCategory}
          className="font-medium text-lg text-blue-500"
        >
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data?.result?.slice(0, 6).map(({ _id, image, category }) => (
          <CardCategory
            key={_id}
            image={image}
            title={category}
            hanldeQuery={hanldeQuery}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
