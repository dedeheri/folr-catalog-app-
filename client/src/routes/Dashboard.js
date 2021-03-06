import React, { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

// cookie
import getCookies from "../utils/cookie";

// redux
import { useDispatch } from "react-redux";
import { getUser } from "../redux/action/dashboard/auth";

// page
import Home from "../page/dashboard/Home";
import Products from "../page/dashboard/Products";
import AddProducts from "../page/dashboard/AddProducts";
import UpdateProducts from "../page/dashboard/UpdateProducts";
import Category from "../page/dashboard/Category";
import AddCategory from "../page/dashboard/AddCategory";
import AddCatalog from "../page/dashboard/AddCatalog";
import Gallery from "../page/dashboard/Gallery";
import UpdateCatalog from "../page/dashboard/UpdateCatalog";
import AddGallery from "../page/dashboard/AddGallery";
import Banner from "../page/dashboard/Banner";
import AddBanner from "../page/dashboard/AddBanner";

function Dashboard() {
  const cookie = getCookies();
  const [protec, setProtec] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    cookie.token && cookie.logged ? setProtec(true) : setProtec(false);
  }, [cookie]);

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
          <Route
            path="category/add-banner"
            element={<AddBanner sorted={true} />}
          />
          <Route path="category/catalog" element={<UpdateCatalog />} />
          <Route path="banner" element={<Banner />} />
          <Route path="banner/add" element={<AddBanner />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/add-gallery" element={<AddGallery />} />
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
