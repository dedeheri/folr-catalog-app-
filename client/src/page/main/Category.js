import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

import Layout from "../../components/Main/Layout";

import CategoryLoading from "../../components/Main/Loading/Category";
import Empty from "../../components/Empty";
import { getCategoryByQuery } from "../../redux/action/main/category";
import CardCategory from "../../components/Main/CardCategory";

function Category() {
  const {
    byQuery: { data, loading },
  } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const { search } = useLocation();
  const navigate = useNavigate();

  // calling
  useEffect(() => {
    dispatch(getCategoryByQuery(search));
  }, [dispatch, search]);

  console.log(search);

  function hanldeQuery(title) {
    navigate({
      pathname: `/products`,
      search: `${createSearchParams({
        catalog: title,
      })}`,
    });
  }

  return (
    <Layout>
      {loading ? (
        <CategoryLoading />
      ) : data?.result?.length === 0 ? (
        <Empty />
      ) : (
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">{data?.message}</h1>

          <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
            {data?.result?.map(({ _id, catalog, image }) => (
              <CardCategory
                key={_id}
                title={catalog}
                image={image}
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
