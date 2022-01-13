// import Image from "next/image";
import {
  Box,
  Grid,
  // Heading,
  GridItem,
  // VStack,
  Text,
  Image,
} from "@chakra-ui/react";

export const About = () => {
  const nowTime = new Date(),
    experience = nowTime.getFullYear() - 1 - 2020;

  return (
    <Box mx={[2, 6, 10]} mb={[2, 6, 10]}>
      <Grid templateColumns="repeat(4, 1fr)" h={475}>
        <GridItem d="flex" flexDirection="column" justifyContent="space-evenly">
          <Box>
            <Text color="gray.500" fontSize="xs" mb={6} fontWeight={600}>
              BIOGRAPHY
            </Text>
            <Text color="gray.900" fontFamily="Roboto Slab">
              I am a front-end developer with a background in Multimedia major.
              Experience in developing web-based client-side sites with
              JavaScript. Have good communication skills, am skilled in
              teamwork, and love to learn new things.
            </Text>
          </Box>
          <Box>
            <Text color="gray.500" fontSize="xs" mb={6} fontWeight={600}>
              CONTACT
            </Text>
            <Text color="gray.900" fontFamily="Roboto Slab">
              <Text>
                Cikarang Barat, Kabupaten Bekasi, Jawa Barat, Indonesia.
              </Text>

              <Text>muhammadfauzulhanif16@outlook.com</Text>

              <Text>+62 851 5885 1642</Text>
            </Text>
          </Box>
        </GridItem>

        <GridItem
          colSpan={2}
          d="flex"
          justifyContent="center"
          // alignItems="center"
          mb={32}
          h="100%"
        >
          <Image src="./img/profile.png" pos="absolute" height="43%" />
        </GridItem>

        <GridItem
          colSpan={1}
          d="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            <Text
              color="gray.500"
              textAlign="right"
              fontSize="xs"
              mb={6}
              fontWeight={600}
            >
              YEARS OF EXPERIENCE
            </Text>
            <Text
              fontSize="5xl"
              textAlign="right"
              color="gray.900"
              fontFamily="Roboto Slab"
            >
              {experience}
            </Text>
          </Box>
          <Box>
            <Text
              color="gray.500"
              textAlign="right"
              fontSize="xs"
              mb={6}
              fontWeight={600}
            >
              PROJECTS DONE
            </Text>
            <Text
              fontSize="5xl"
              textAlign="right"
              color="gray.900"
              fontFamily="Roboto Slab"
            >
              2
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
