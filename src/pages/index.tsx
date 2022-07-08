import { Stack, Flex, Heading, Button, Text, Image, Checkbox, FormControl, FormLabel, Input, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              Bem-vindo(a), novamente!
            </Text>
            <br />{' '}
            <Text color={'purple.600'} as={'span'}>
              Faça aqui seu Login 😄
            </Text>{' '}
          </Heading>
         

          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Lembre de mim</Checkbox>
                <Link color={'blue.400'}>Esqueceu a senha?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Fazer Login
              </Button>
            </Stack>
          </Stack>

        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={"https://www.expressivesuite.com/assets/posts/2021-09-14/landscape.svg"}
          maxHeight={"100vh"}
          width={"100%"}
        />
      </Flex>
    </Stack>
  )
}

export default Home;