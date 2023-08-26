import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  Menu,
  Avatar,
  VStack,
  Drawer,
  HStack,
  MenuList,
  MenuItem,
  BoxProps,
  FlexProps,
  MenuButton,
  MenuDivider,
  CloseButton,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

// Import
import { ReactText } from "react";
import { useContext } from "react";
import { IconType } from "react-icons";
import { MdPets, MdPerson } from "react-icons/md";
import { Link as RouteLink } from "react-router-dom";
import { FiHome, FiChevronDown } from "react-icons/fi";

// Component
import { ThemeToggle } from "../themeToggle/themeToggle";
import { AuthContext } from "../../../Context/auth/AuthContext.tsx";

// Img
import Logo from "../../../assets/img/logo-kf.png";

// Interface
interface LinkItemProps {
  name: string;
  icon: IconType;
  link?: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, link: "/home" },
  { name: "Perfil", icon: MdPerson, link: "/perfil" },
  { name: "Register", icon: MdPets, link: "/registrar-pet" },
];

export default function SidebarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4"></Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          display={"flex"}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          <img width={"55px"} src={Logo} alt="" />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  link?: string;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Link
      to={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      as={RouteLink}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  // const { colorMode, toggleColorMode } = useColorMode();

  const { user } = useContext(AuthContext);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      gap={"4"}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <ThemeToggle />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={"https://avatars.githubusercontent.com/u/84741807?v=4"}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">
                    Bem vindo, {user?.firstName} {user?.lastName}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <RouteLink to={"/"}>
                <MenuItem>Sair</MenuItem>
              </RouteLink>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
