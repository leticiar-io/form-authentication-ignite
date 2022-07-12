import { Heading } from "@chakra-ui/react";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Metrics() {
  return (
    <Heading>Metrics aaa</Heading>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list3'],
  roles: ['administrator'],
})