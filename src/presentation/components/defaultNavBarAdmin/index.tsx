// Import
import { Outlet } from "react-router-dom";
import SidebarWithHeader from "../sideBar";

export function DefaultNavBarAdmin() {
  return (
    <>
      <SidebarWithHeader />
      <Outlet />
    </>
  );
}
