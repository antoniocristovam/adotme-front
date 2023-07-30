import { Route, Routes } from "react-router-dom";
import { Flat } from "../presentation/app/modules/flat";
import Homepage from "../presentation/components/homePage";
import LoginPage from "../presentation/app/modules/loginPage";
import Register from "../presentation/components/authentication";
import ProfilePage from "../presentation/app/modules/page/profile";
import RegisterPet from "../presentation/app/modules/page/registerPet";
import { DefaultNavBar } from "../presentation/components/defaultNavBar";
import { DefaultNavBarAdmin } from "../presentation/components/defaultNavBarAdmin";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultNavBar />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/plano" element={<Flat />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<DefaultNavBarAdmin />}>
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/registrar-pet" element={<RegisterPet />} />
      </Route>
    </Routes>
  );
}
