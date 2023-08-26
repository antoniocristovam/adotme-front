import { PublicRoutes } from "./routes/public.routes";
import { PrivateRoutes } from "./routes/private.routes";
import AuthProvider from "./Context/auth/AuthProvider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./presentation/app/modules/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <>
            <PublicRoutes />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />}></Route>
              </Route>
            </Routes>
          </>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
