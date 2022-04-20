import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ModalLogout from "./ModalLogout";
import Menu from "./Menu";
import SidebarItem from "./SidebarItem";
import RemoveProduct from "./RemoveProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Feedback from "./Feedback";
import RemoveCatalog from "./RemoveCatalog";
function Layout({ children }) {
  return (
    <div className="relative  h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <ModalLogout />
      <RemoveProduct />
      <RemoveCatalog />
      <Menu>
        <SidebarItem />
      </Menu>
      <Feedback />
      <div className="flex">
        <Sidebar>
          <SidebarItem />
        </Sidebar>

        <div className="md:pl-64 md:pr-8 px-5 md:mt-10 mt-5 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
