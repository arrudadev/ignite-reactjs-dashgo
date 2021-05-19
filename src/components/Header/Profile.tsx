import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alexandre Monteiro</Text>
          <Text color="gray.300" fontSize="small">
            alexandre.monteiro.bec@gmail.com
          </Text>
        </Box>
      )}      

      <Avatar
        size="md"
        name="Alexandre Monteiro" 
        src="https://github.com/monteiro-alexandre.png" 
      />
    </Flex>
  );
}