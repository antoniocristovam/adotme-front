import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      color={colorMode === "dark" ? "cyan" : "orange"}
      rounded={"full"}
      borderRadius={"full"}
      size={"sm"}
      aria-label={"toggle mode button"}
    >
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
