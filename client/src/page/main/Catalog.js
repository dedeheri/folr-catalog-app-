import React, { useEffect } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";

// redux
import { getCatalog } from "../../redux/action/main/category";
import { useDispatch, useSelector } from "react-redux";

// Components
import CategoryLoading from "../../components/Main/Loading/Category";
import Layout from "../../components/Main/Layout";
import BannerLoading from "../../components/Main/Loading/Banner";
import Empty from "../../components/Empty";
import CardCategory from "../../components/Main/CardCategory";
import BannerCategory from "../../components/Main/BannerCategory";

function Catalog() {
  const {
    catalog: { data, loading, error },
  } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  // calling
  useEffect(() => {
    dispatch(getCatalog(id));
  }, [dispatch, id]);

  function hanldeQuery(title) {
    navigate({
      pathname: `/products`,
      search: `${createSearchParams({
        ctg: title,
      })}`,
    });
  }

  return (
    <Layout>
      {loading ? (
        <div className="space-y-20">
          <BannerLoading />
          <CategoryLoading />
        </div>
      ) : error ? (
        <Empty />
      ) : (
        <div className="space-y-20">
          {data?.banner?.length !== 0 ? (
            <BannerCategory data={data} loading={loading} />
          ) : null}

          <div className="space-y-4">
            <h1 className="font-bold text-xl">{data?.message}</h1>

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
        </div>
      )}
    </Layout>
  );
}

export default Catalog;
