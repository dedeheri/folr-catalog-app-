import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/action/main/category";

// components
import CardCategory from "../../components/Main/CardCategory";
import Layout from "../../components/Main/Layout";
import CategoryLoading from "../../components/Main/Loading/Category";

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
    const slug = c.replaceAll(" ", "-");

    navigate({
      pathname: `/category/${slug}`,
    });
  }

  return (
    <Layout>
      {loading ? (
        <CategoryLoading />
      ) : (
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Semua Kategori</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data?.result?.map(({ _id, image, category }) => (
              <CardCategory
                key={_id}
                image={image}
                title={category}
                hanldeQuery={hanldeQuery}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Category;
