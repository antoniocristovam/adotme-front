// Import
import NavBarHomePage from "../navBar";
import { Outlet } from "react-router-dom";

export function DefaultNavBar() {
  return (
    <>
      <NavBarHomePage />
      <Outlet />
    </>
  );
}
