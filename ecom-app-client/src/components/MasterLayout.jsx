import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default MasterLayout;
