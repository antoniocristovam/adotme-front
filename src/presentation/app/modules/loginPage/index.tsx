import {
  Box,
  Flex,
  Link,
  Input,
  Image,
  Stack,
  Button,
  Heading,
  Checkbox,
  FormLabel,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../../../../assets/img/logo-certa.png";
import { Link as RouteLink } from "react-router-dom";

import http from "../../../../http";

// Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { notifyError, notifySuccess } from "../../../../components/notify";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";

export default function LoginPage() {
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().nullable(),
      password: Yup.string().nullable(),
    }),

    onSubmit: async (values) => {
      const valuesToSubmit = {
        usernameOrEmail: values.usernameOrEmail || null,
        password: values.password || null,
      };

      const result = await http.post("/api/v1/auth/login", valuesToSubmit);

      console.log(result.data);

      if (values) {
        console.log("Enviou");
        notifySuccess("Usuário autenticado com sucesso");
      } else {
        console.log("Não enviou");
        notifyError(
          "Ocorreu um erro ao entrar, verifique as informações e tente novamente"
        );
      }
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { auth, setAuth } = useContext(AuthContext);
  console.log("auth", auth);

  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <Flex
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Image w={"28"} src={Logo}></Image>
              <Heading fontSize={"4xl"}>Seja bem Vindo</Heading>
              {/* <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text> */}
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="text">
                  <FormLabel>Login</FormLabel>
                  <Input
                    name="usernameOrEmail"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.usernameOrEmail}
                    type="text"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Senha</FormLabel>
                  <Input
                    name="password"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.password}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Esqueceu sua senha ?</Link>
                  </Stack>
                  <Button
                    // onClick={() => setAuth(true, "LOGADO")}
                    onClick={() => setAuth(true)}
                    bg={"blue.400"}
                    type="submit"
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    <RouteLink to={"/dashboard"}>Entrar</RouteLink>
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </>
  );
}
