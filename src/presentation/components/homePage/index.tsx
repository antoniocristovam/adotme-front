import { Box, Text, Stack, Button, Heading, Container } from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            KF - Fardamentos <br />
            <Text as={"span"} color={"green.400"}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Text>
          </Heading>
          <Text as={"span"} color={"green.400"}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Text>
          <Text color={"gray.500"}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
