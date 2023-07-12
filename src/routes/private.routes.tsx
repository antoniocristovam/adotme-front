// Import
import { Navigate, Outlet } from "react-router-dom";

// Pag
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export function PrivateRoutes() {
  const { auth } = useContext(AuthContext);

  return !auth ? <Outlet /> : <Navigate to={"/login"} />;
}
