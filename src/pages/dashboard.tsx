import { Flex, Stack, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <Stack minH={"100vh"} justifyContent={"center"} align="center">
      <Heading>Oba, parece que vc está logado!</Heading>
      <Text>Tá dúvidando? Pois olha aqui seus dados</Text>
      <Text>Email: {user?.email}</Text>

      <Image
        alt={"Cat Image"}
        objectFit={"cover"}
        src={"https://c.tenor.com/E_z_0ENSscoAAAAC/gato-corazon.gif"}
        maxHeight={"auto"}
        width={"40vh"}
      />
    </Stack>
  );
}
