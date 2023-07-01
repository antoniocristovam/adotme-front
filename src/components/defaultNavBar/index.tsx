import { Outlet } from "react-router-dom";
import NavBarHomePage from "../navBar";

export function DefaultLayout() {
  return (
    <>
      <NavBarHomePage />
      <Outlet />
    </>
  );
}
