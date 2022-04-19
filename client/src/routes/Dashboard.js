import React, { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/dashboard/Home";
import getCookies from "../utils/cookie";

// redux
import { useDispatch } from "react-redux";
import { getUser } from "../redux/action/dashboard";
import Products from "../page/dashboard/Products";
import AddProducts from "../page/dashboard/AddProducts";
import UpdateProducts from "../page/dashboard/UpdateProducts";
import Category from "../page/dashboard/Category";
import AddCategory from "../page/dashboard/AddCategory";
import AddCatalog from "../page/dashboard/AddCatalog";

function Dashboard() {
  const cookie = getCookies();
  const [protec, setProtec] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    cookie.token && cookie.logged ? setProtec(true) : setProtec(false);
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {protec ? (
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/add" element={<AddProducts />} />

          <Route path="/product/:id/:product" element={<UpdateProducts />} />
          <Route path="/category" element={<Category />} />
          <Route path="category/add-category" element={<AddCategory />} />
          <Route path="category/add-catalog" element={<AddCatalog />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to={"/auth"} />}></Route>
        </Routes>
      )}
    </>
  );
}

export default Dashboard;
