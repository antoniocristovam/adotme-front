// Import
import {
  Box,
  Flex,
  Text,
  Input,
  Stack,
  Button,
  Avatar,
  HStack,
  Heading,
  IconProps,
  Container,
  FormLabel,
  SimpleGrid,
  AvatarGroup,
  FormControl,
  useBreakpointValue,
} from "@chakra-ui/react";

// Component
import Background from "../../assets/img/pet-background.jpg";
import Background2 from "../../assets/img/mobile-bg.png";
// import NavBarHomePage from "../navBar";

// Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { notifyError, notifySuccess } from "../notify";
import { avatars } from "./view";

export default function Register() {
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstName: "asas",
      email: "asasas",
      lastName: "asasasa",
      username: "sasas",
      password: "asasasa",
      confirmPassword: "asasss",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().nullable(),
      email: Yup.string().nullable(),
      lastName: Yup.string().nullable(),
      username: Yup.string().nullable(),
      password: Yup.string().nullable(),
      confirmPassword: Yup.string().nullable(),
    }),
    onSubmit: (values) => {
      const valuesToSubmit = {
        firstName: values.firstName || null,
        email: values.email || null,
        lastName: values.lastName || null,
        username: values.username || null,
        password: values.password || null,
        confirmPassword: values.confirmPassword || null,
      };

      console.log(valuesToSubmit);

      if (values) {
        console.log("Enviou");
        notifySuccess("Usuário autenticado com sucesso");
      } else {
        console.log(valuesToSubmit);

        console.log("Não enviou");
        notifyError(
          "Ocorreu um erro ao entrar, verifique as informações e tente novamente"
        );
      }
    },
  });

  return (
    <>
      <Box
        backgroundImage={{ sm: Background2, md: Background }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        objectFit={"cover"}
        bgSize={"cover"}
        minH={"100vh"}
        w={"100%"}
      >
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Adote seu pet{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                &
              </Text>{" "}
              seja feliz (:
            </Heading>
            <Box display={"inline"} mt={"-10"}>
              <Stack direction={"row"} spacing={4} align={"center"}>
                <AvatarGroup>
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                      position={"relative"}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: "full",
                        height: "full",
                        rounded: "full",
                        transform: "scale(1.125)",
                        bgGradient: "linear(to-bl, red.400,pink.400)",
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "4xl", md: "6xl" }}
                >
                  +
                </Text>
                <Flex
                  align={"center"}
                  justify={"center"}
                  fontFamily={"heading"}
                  fontSize={{ base: "sm", md: "lg" }}
                  bg={"gray.800"}
                  color={"white"}
                  rounded={"full"}
                  minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                  minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                >
                  Você
                </Flex>
              </Stack>
            </Box>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Venha fazer parte{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                Dessa
              </Text>{" "}
              Comunidade.
            </Heading>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Seja bem vindo(a) 🐶🐈
                {/* <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                  >
                  !
                </Text> */}
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Cadastre-se e venha conhecer um mundo mais feliz.
              </Text>
            </Stack>
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Box mt={10}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel color={"black"}>Nome</FormLabel>
                        <Input
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.firstName}
                          placeholder="Nome"
                          name="firstName"
                          bg={"gray.100"}
                          border={0}
                          color={"gray.500"}
                          _placeholder={{
                            color: "gray.500",
                          }}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName" isRequired>
                        <FormLabel color={"black"}>Sobrenome</FormLabel>
                        <Input
                          placeholder="Sobrenome"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.lastName}
                          name="lastName"
                          bg={"gray.100"}
                          border={0}
                          color={"gray.500"}
                          _placeholder={{
                            color: "gray.500",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl isRequired id="lastName">
                    <FormLabel color={"black"}>Usuáro</FormLabel>
                    <Input
                      placeholder="Usuário"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.username}
                      name="username"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel color={"black"}>Email</FormLabel>
                    <Input
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.email}
                      name="email"
                      placeholder="Email"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel color={"black"}>Senha</FormLabel>
                    <Input
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.password}
                      name="password"
                      placeholder="Senha"
                      type="password"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel color={"black"}>
                      Insira sua senha novamente
                    </FormLabel>
                    <Input
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.confirmPassword}
                      name="confirmPassword"
                      placeholder="Senha"
                      type="password"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                  {/* <Input
                  placeholder="+1 (___) __-___-___"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                /> */}
                  {/* <Button fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
                  Upload CV
                </Button> */}
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  type="submit"
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    </>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <></>
    // <Icon
    //   width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
    //   zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
    //   height="560px"
    //   viewBox="0 0 528 560"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <circle cx="71" cy="61" r="111" fill="#F56565" />
    //   <circle cx="244" cy="106" r="139" fill="#ED64A6" />
    //   <circle cy="291" r="139" fill="#ED64A6" />
    //   <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
    //   <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
    //   <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
    //   <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    // </Icon>
  );
};
