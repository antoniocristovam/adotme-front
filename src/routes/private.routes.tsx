// Import
import { Navigate, Outlet } from "react-router-dom";

// Pag
import { AuthContext } from "../Context/auth/AuthContext.tsx";
import { useContext } from "react";

export function PrivateRoutes() {
  const { user } = useContext(AuthContext);

  return !user ? <Outlet /> : <Navigate to={"/login"} />;
}
