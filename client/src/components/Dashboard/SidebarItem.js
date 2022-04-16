import React from "react";

import {
  BiHomeAlt,
  BiBox,
  BiImage,
  BiCategoryAlt,
  BiLandscape,
  BiMessageDetail,
} from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import * as actionTypes from "../../redux/action-types-style";
import { useDispatch } from "react-redux";

function SidebarItem() {
  const active =
    "bg-slate-700 hover:bg-slate-600 duration-300 flex px-3 text-white rounded-md items-center space-x-3 p-1 duration-300 ";
  const noActive =
    "flex text-gray-700 px-3 hover:bg-slate-600 hover:text-white  duration-300 rounded-md items-center space-x-3 p-1";

  const dispatch = useDispatch();
  function feedback() {
    dispatch({ type: actionTypes.FEEDBACK_DASHBOARD_ON });
  }

  return (
    <div className="fixed w-56 md:border-r px-5  h-screen ">
      <div className="mt-10 space-y-4">
        <NavLink
          className={({ isActive }) => (isActive ? active : noActive)}
          to={"/dashboard"}
          end={true}
        >
          <BiHomeAlt fontSize={24} />
          <h1 className="text-xl">Dashboard</h1>
        </NavLink>

        <div className="border-t" />
        <div className="space-y-1">
          <NavLink
            className={({ isActive }) => (isActive ? active : noActive)}
            to={"/dashboard/product"}
          >
            <BiBox fontSize={24} />
            <h1 className="text-xl">Produk</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : noActive)}
            to={"/dashboard/gallery"}
          >
            <BiImage fontSize={24} />
            <h1 className="text-xl">Galeri</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : noActive)}
            to={"/dashboard/category"}
          >
            <BiCategoryAlt fontSize={24} />
            <h1 className="text-xl">Kategori</h1>
          </NavLink>
        </div>

        <div className="border-t" />
        <div className="space-y-1">
          <NavLink
            className={({ isActive }) => (isActive ? active : noActive)}
            to={"/dashboard/banner"}
          >
            <BiLandscape fontSize={24} />
            <h1 className="text-xl">Banner</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : noActive)}
            to={"/dashboard/setting"}
          >
            <AiOutlineSetting fontSize={24} />
            <h1 className="text-xl">Pengaturan</h1>
          </NavLink>
        </div>

        <div className="border-t" />
        <div className="space-y-1">
          <div
            onClick={feedback}
            className="flex cursor-pointer hover:text-white px-3 hover:bg-slate-600 duration-300 rounded-md items-center space-x-3 p-1"
          >
            <BiMessageDetail fontSize={24} />
            <h1 className="text-xl">Masukan</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
