import React, { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/dashboard/Home";
import getCookies from "../utils/cookie";

// redux
import { useDispatch } from "react-redux";
import { getUser } from "../redux/action/dashboard";
import Products from "../page/dashboard/Products";
import AddProducts from "../page/dashboard/AddProducts";

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
          <Route path="/product" index element={<Products />} />
          <Route path="/product/add" index element={<AddProducts />} />
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
