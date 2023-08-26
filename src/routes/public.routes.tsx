import { Route, Routes } from "react-router-dom";
import Homepage from "../presentation/components/homePage";
import LoginPage from "../presentation/app/modules/loginPage";
import Register from "../presentation/components/authentication";
import { DefaultNavBar } from "../presentation/components/defaultNavBar";
import { DefaultNavBarAdmin } from "../presentation/components/defaultNavBarAdmin";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultNavBar />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<DefaultNavBarAdmin />}>
        {/* <Route path="/perfil" element={<ProfilePage />} /> */}
      </Route>
    </Routes>
  );
}
