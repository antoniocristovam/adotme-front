// Import
import { Route, Routes } from "react-router-dom";

// Pag
import { HomePage } from "../presentation/app/modules/homePage";
import { Dashboard } from "../presentation/app/modules/dashboard";
import LoginPage from "../presentation/app/modules/loginPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/pagina-de-login" element={<LoginPage />}></Route>
    </Routes>
  );
}
