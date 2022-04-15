import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Login from "../page/dashboard/auth/Login";
import Forget from "../page/dashboard/auth/Forget";
import Register from "../page/dashboard/auth/Register";
import Reset from "../page/dashboard/auth/Reset";

function Auth() {
  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="forget" index element={<Forget />} />
      <Route path="signup" index element={<Register />} />
      <Route path="reset" index element={<Reset />} />
    </Routes>
  );
}

export default Auth;
