import React from "react";

// router
import { Route, Routes } from "react-router-dom";
import Detail from "../page/main/Detail";
import Catalog from "../page/main/Catalog";
import Home from "../page/main/Home";
import NotFound from "../page/NotFound";
import Product from "../page/main/Product";
import Category from "../page/main/Category";

function Main() {
  return (
    <Routes>
      <Route path={"/"} index element={<Home />} />
      <Route path={"products/:slug"} element={<Detail />} />
      <Route path={"category/:id"} element={<Catalog />} />
      <Route path={"category"} element={<Category />} />
      <Route path={"products"} element={<Product />} />

      {/* not found */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default Main;
