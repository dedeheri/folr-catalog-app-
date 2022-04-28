import React, { useEffect } from "react";
import Banner from "../../components/Main/Banner";
import Layout from "../../components/Main/Layout";
import Category from "../../components/Main/Category";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewProduct,
  getProductByHistory,
} from "../../redux/action/main/product";
import SectionCategory from "../../components/Main/SectionCategory";
import SectionCatalog from "../../components/Main/SectionCatalog";
import SectionProduct from "../../components/Main/SectionProduct";

import CartLoading from "../../components/Main/Loading/Cart";
function Home() {
  const {
    newProduct: { data, loading },
    getByHistory: { data: dataHistory, loading: loadingHistory },
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewProduct());
    dispatch(getProductByHistory());
  }, [dispatch]);

  return (
    <Layout>
      <div className="space-y-20">
        <Banner />
        <Category />
        {/* new product */}

        {loading ? (
          <CartLoading />
        ) : (
          <SectionProduct data={data} loading={loading} title={"Produk Baru"} />
        )}

        {/* by category product */}
        <SectionCategory data={dataHistory} loading={loadingHistory} />
        {/* by catalog */}
        <SectionCatalog data={dataHistory} loading={loadingHistory} />
      </div>
    </Layout>
  );
}

export default Home;
