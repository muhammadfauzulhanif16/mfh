import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Center
      mx={[2, 6, 10]}
      bgColor="gray.100"
      height="50vh"
      borderRadius={16}
      mb={[2, 6, 10]}
    >
      <VStack>
        <Heading>Welcome to My Website</Heading>
        <Heading size="md">Muhammad Fauzul Hanif</Heading>
      </VStack>
    </Center>
  );
};
