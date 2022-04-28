import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Layout from "../../components/Main/Layout";
import SectionProduct from "../../components/Main/SectionProduct";
import { getProductByQuery } from "../../redux/action/main/product";

import CartLoading from "../../components/Main/Loading/Cart";
import Empty from "../../components/Empty";

function Products() {
  const {
    sort: { data, loading },
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { search } = useLocation();

  // calling
  useEffect(() => {
    dispatch(getProductByQuery(search));
  }, [dispatch, search]);

  console.log(data);

  return (
    <Layout>
      {loading ? (
        <CartLoading />
      ) : data?.result?.length === 0 ? (
        <Empty />
      ) : (
        <SectionProduct data={data} title={`Hasil untuk ${data?.title}`} />
      )}
    </Layout>
  );
}

export default Products;
