// Import
import { Route, Routes } from "react-router-dom";

// Pag
import { HomePage } from "../presentation/app/modules/homePage";
import { Dashboard } from "../presentation/app/modules/dashboard";
import LoginPage from "../presentation/app/modules/loginPage";
import { Flat } from "../presentation/app/modules/flat";
// import { Support } from "../presentation/app/modules/support";
import Register from "../components/authentication";
import Register2 from "../components/authenticationNew";
import Homepage from "../components/homePage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/pagina-de-login" element={<LoginPage />}></Route>
      <Route path="/plano" element={<Flat />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/register2" element={<Register2 />}></Route>
      {/* <Route path="/suporte" element={<Support  />}></Route> */}
    </Routes>
  );
}
