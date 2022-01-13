import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Center mx={[2, 6, 10]} pb={32} pt={20} fontFamily="Roboto Slab">
      <VStack>
        <Text fontSize={["3xl", "4xl", "5xl", "6xl"]} align={"center"}>
          Muhammad Fauzul Hanif
        </Text>
        <Text fontSize={["3xl", "4xl", "5xl", "6xl"]} align={"center"}>
          Front-End Web Developer
        </Text>
        <Text fontSize={["3xl", "4xl", "5xl", "6xl"]} align={"center"}>
          Based in Indonesia
        </Text>
      </VStack>
    </Center>
  );
};
