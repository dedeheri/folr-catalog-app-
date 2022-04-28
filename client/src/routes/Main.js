import React from "react";

// router
import { Route, Routes } from "react-router-dom";
import Detail from "../page/main/Detail";
import Category from "../page/main/Category";
import Home from "../page/main/Home";
import NotFound from "../page/NotFound";
import Product from "../page/main/Product";

function Main() {
  return (
    <Routes>
      <Route path={"/"} index element={<Home />} />
      <Route path={"products/:slug"} element={<Detail />} />
      <Route path={"category"} element={<Category />} />
      <Route path={"products"} element={<Product />} />

      {/* not found */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default Main;
