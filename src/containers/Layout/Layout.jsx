import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../../components";
import { ProductList } from "../index";

const Layout = () => {
  return (
    <>
      <Menu />
      {/* <ProductList /> */}
      <Outlet />
    </>
  );
};

export default Layout;
