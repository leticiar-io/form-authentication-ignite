import { Flex, Stack, Heading, Image, Text, Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);

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

      <Button onClick={signOut}>Sair</Button>

      {/*Uma outra forma é só deixar administrator*/}
      <Can permissions={["metrics.list"]}> 
        <Heading fontSize={24}>Métricas</Heading>
      </Can>
    </Stack>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {}
  };
});
