// Import
import NavBarHomePage from "../navBar";
import { Outlet } from "react-router-dom";
import SidebarWithHeader from "../sideBar";

export function DefaultNavBar() {
  return (
    <>
      <NavBarHomePage />
      <Outlet />
    </>
  );
}
