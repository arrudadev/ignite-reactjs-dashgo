import { 
  Box, 
  Flex, 
  Heading, 
  Button, 
  Icon, 
  Table, 
  Thead, 
  Tr, 
  Th, 
  Checkbox, 
  Tbody, 
  Td, 
  Text, 
  useBreakpointValue
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isMediumVersion = useBreakpointValue({
    base: false,
    md: true
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" w="100%">
          <Flex mb="8" justify="space-between" align={['flex-start', "center"]} direction={['column', 'row']}>
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button 
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              mt={['3', null]}
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha" overflowX={['auto', 'auto', null]} display={['block', 'block', 'table']}>
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                { isMediumVersion && <Th>Data de cadastro</Th> } 
                <Th w="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alexandre Monteiro</Text>
                    <Text fontStyle="sm" color="gray.300">alexandre.monteiro.bec@gmail.com</Text>
                  </Box>
                </Td>
                { isMediumVersion && <Td>04 de Abril, 2021</Td> } 
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alexandre Monteiro</Text>
                    <Text fontStyle="sm" color="gray.300">alexandre.monteiro.bec@gmail.com</Text>
                  </Box>
                </Td>
                { isMediumVersion && <Td>04 de Abril, 2021</Td> } 
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alexandre Monteiro</Text>
                    <Text fontStyle="sm" color="gray.300">alexandre.monteiro.bec@gmail.com</Text>
                  </Box>
                </Td>
                { isMediumVersion && <Td>04 de Abril, 2021</Td> } 
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}