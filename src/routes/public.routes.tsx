import { Route, Routes } from "react-router-dom";
import Homepage from "../components/homePage";
import Register from "../components/authentication";
import { Flat } from "../presentation/app/modules/flat";
import { DefaultNavBar } from "../components/defaultNavBar";
import LoginPage from "../presentation/app/modules/loginPage";
import AuthProvider from "../Context/AuthContext";

export function PublicRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<DefaultNavBar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/plano" element={<Flat />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
