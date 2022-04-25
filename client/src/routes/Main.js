import React from "react";

// router
import { Route, Routes } from "react-router-dom";
import Home from "../page/main/Home";
import NotFound from "../page/NotFound";

function Main() {
  return (
    <Routes>
      <Route path={"/"} index element={<Home />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default Main;
