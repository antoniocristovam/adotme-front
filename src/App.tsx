import { useState } from "react";
import { Box, useColorModeValue, Button, useColorMode } from "@chakra-ui/react";
import { SelectColorMode } from "./selectColorMode";
import SidebarWithHeader from "./components/sideBar";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { PrivateRoutes } from "./routes/private.routes";
import { PublicRoutes } from "./routes/public.routes";

function App() {
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
      <BrowserRouter>
        <PrivateRoutes />
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
