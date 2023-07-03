// Import
import { Route, Routes } from "react-router-dom";

// Pag
import { Dashboard } from "../presentation/app/modules/dashboard";
import AuthProvider from "../Context/AuthContext";

export function PrivateRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/" element={<DefaultNavBar />}>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/plano" element={<Flat />}></Route>
      </Route> */}
      </Routes>
    </AuthProvider>
  );
}
