import React, { useContext } from "react";
import { PrivateRoutes } from "./routes/private.routes";
import { PublicRoutes } from "./routes/public.routes";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { auth } = useContext(AuthContext);
  console.log("auth", auth);

  return (
    <>
      <BrowserRouter>
        {/* <PrivateRoutes />
        <PublicRoutes /> */}
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </>
  );
}

export default App;
