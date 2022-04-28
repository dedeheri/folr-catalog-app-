import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/Main/Layout";
import { getDetailProduct } from "../../redux/action/main/product";
import SectionCategory from "../../components/Main/SectionCategory";
import SectionCatalog from "../../components/Main/SectionCatalog";

import * as actionTypeStyle from "../../redux/action-types-style";

import Empty from "../../components/Empty";

function Detail() {
  const { slug } = useParams();

  const {
    detail: { data, loading, error },
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // calling api
  useEffect(() => {
    dispatch(getDetailProduct(slug));
  }, [dispatch, slug]);

  const [preview, setPreview] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    setPreview(data?.result?.detail?.image[0]);
    setActive(data?.result?.detail?.image[0]);
  }, [data]);

  function hanldeImage(prop) {
    setPreview(prop);
    setActive(prop);
  }

  function gprice(t) {
    const p = new Intl.NumberFormat("idr", {
      style: "currency",
      currency: "IDR",
    }).format(t);

    return p;
  }

  function handleModalImage(preview) {
    dispatch({
      type: actionTypeStyle.IMAGE_ON,
      url: preview,
      title: data?.result?.detail?.productName,
      data: data,
    });
  }

  return (
    <Layout>
      {error ? (
        <Empty />
      ) : (
        <div className="space-y-10">
          <div className="grid gird-cols-1 md:grid-cols-3 gap-5">
            {/* section 1 */}
            <div className="space-y-3 col-span-2">
              <img
                onClick={() => handleModalImage(preview)}
                className="md:h-[32rem] h-[19rem] w-full cursor-pointer rounded-md"
                alt={process.env.REACT_APP_URL_IMAGE + preview}
                src={process.env.REACT_APP_URL_IMAGE + preview}
              />

              <div className="flex space-x-1">
                {data?.result?.detail?.image?.map((_, i) => (
                  <div
                    key={i}
                    className={`p-1 cursor-pointer hover:border-2 hover:border-blue-500 duration-300 rounded-md ${
                      active === _
                        ? "border-2 border-blue-500"
                        : "border-2 border-transparent"
                    }`}
                  >
                    <img
                      onClick={() => hanldeImage(_)}
                      src={process.env.REACT_APP_URL_IMAGE + _}
                      alt={process.env.REACT_APP_URL_IMAGE + _}
                      className={`w-24 md:h-24 h-20 rounded-md `}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* section 2 */}

            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                {data?.result?.detail?.productName}
              </h1>
              <div className="border-t" />
              <h1 className="text-2xl font-medium">
                {gprice(data?.result?.detail?.price)}
              </h1>
              <div className="border-t" />
              <div className="space-y-1">
                <h1 className="text-xl font-bold">Spesifikasi</h1>
                <p className="font-medium text-lg">
                  Material : {data?.result?.detail?.material}
                </p>
                <p className="font-medium text-lg">
                  Lebar : {data?.result?.detail?.width} cm
                </p>
                <p className="font-medium text-lg">
                  Panjang : {data?.result?.detail?.lengthy} cm
                </p>
                <p className="font-medium text-lg">
                  Tinggi : {data?.result?.detail?.height} cm
                </p>
                <p className="font-medium text-lg">
                  Berat : {data?.result?.detail?.weight} gram
                </p>
              </div>
              <div className="border-t" />
            </div>
          </div>

          {/* by category product */}
          <SectionCategory data={data} loading={loading} />
          {/* by catalog */}
          <SectionCatalog data={data} loading={loading} />
        </div>
      )}
    </Layout>
  );
}

export default Detail;
