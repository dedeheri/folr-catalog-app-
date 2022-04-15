import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Layout from "../../components/Dashboard/Layout";
import TableProducts from "../../components/Dashboard/TableProducts";
import Table from "../../components/Dashboard/Loading/Table";
import { getProducts } from "../../redux/action/dashboard";
import Empty from "../../components/Empty";
import Add from "../../components/Dashboard/Add";
import Filter from "../../components/Dashboard/Filter";

function Products() {
  const dispatch = useDispatch();
  const {
    getProducts: { data, loading, error },
    removeProducts: { data: message },
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, message]);

  // console.log(data);

  return (
    <Layout>
      <div>
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
      </div>
    </Layout>
  );
}

export default Products;
