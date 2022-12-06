import {
  Stack,
  Flex,
  Heading,
  Button,
  Text,
  Image,
  Input
} from "@chakra-ui/react";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    }

    await signIn(data);
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "purple.400",
                zIndex: -1
              }}
            >
              Bem-vindo(a), novamente!
            </Text>
            <br />{" "}
            <Text color={"purple.600"} as={"span"}>
              Faça aqui seu Login 😄
            </Text>{" "}
          </Heading>

          <Flex
            as="form"
            width="100%"
            maxWidth={360}
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit}
          >
            <Stack spacing="4">
              <Input
                name="email"
                type="email"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="chicomotoquinha@gmail.com"
              />
              <Input
                name="password"
                type="password"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </Stack>

            <Button type="submit" mt="6" colorScheme="purple">
              Entrar
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "landscape.svg"
          }
          maxHeight={"100vh"}
          width={"100%"}
        />
      </Flex>
    </Stack>
  );
}


export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});