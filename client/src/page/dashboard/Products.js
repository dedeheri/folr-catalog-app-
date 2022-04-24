import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Layout from "../../components/Dashboard/Layout";
import TableProducts from "../../components/Dashboard/TableProducts";
import Table from "../../components/Dashboard/Loading/Table";
import { getProducts } from "../../redux/action/dashboard/product";
import Empty from "../../components/Empty";
import Add from "../../components/Dashboard/Add";
import Filter from "../../components/Dashboard/Filter";

function Products() {
  const dispatch = useDispatch();
  const {
    get: { data, loading },
    remove: { data: message },
    featuredProduct: { data: messageFeatured },
  } = useSelector((state) => state.dashboardProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, message, messageFeatured]);

  return (
    <Layout>
      <div className="flex space-x-3 justify-end">
        <Filter />
        {/* add */}
        <Add link={"add"} name="Tambah Produk" />
      </div>

      {loading ? (
        <Table />
      ) : data?.result?.length == 0 ? (
        <Empty />
      ) : (
        <TableProducts data={data} />
      )}
    </Layout>
  );
}

export default Products;
