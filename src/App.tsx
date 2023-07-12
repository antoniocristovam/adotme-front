import React, { useContext } from "react";
import { PrivateRoutes } from "./routes/private.routes";
import { PublicRoutes } from "./routes/public.routes";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./presentation/app/modules/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoutes />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
