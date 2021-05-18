import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Alexandre Monteiro</Text>
        <Text color="gray.300" fontSize="small">
          alexandre.monteiro.bec@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Alexandre Monteiro" 
        src="https://github.com/monteiro-alexandre.png" 
      />
    </Flex>
  );
}