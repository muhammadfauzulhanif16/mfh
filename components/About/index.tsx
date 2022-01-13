import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box mx={[2, 6, 10]} mb={[2, 6, 10]} id="about">
      <Heading textAlign="center" size="md" mb={[2, 6, 10]}>
        About
        <Divider height="1rem" />
      </Heading>

      <Flex direction={{ base: "column", md: "row" }}>
        {/*<Image*/}
        {/*  borderRadius={16}*/}
        {/*  alt="Muhammad Fauzul Hanif"*/}
        {/*  boxSize={{ md: "50%" }}*/}
        {/*  src="https://bn1files.storage.live.com/y4pW69wLDEnKUKoN5uT4YK1m2CHx-O2dINBbv_gV-5hqZX5ktvbvNT2Pmqz3oojHNRixd8VyW0MBF1Niei0UyEzjzPRMYo4n2F9yQXcCvMG66fVOX2x66S89R9PZeZQaRYRG_aUMdblml9KQqPpzuJiKxgc2KRFq8Lb1ZhuuhSmGhWMb0yDvTp0S5LtB-Xy5oIIQzF1WcgnWdpFpLSBJWBo5esUBWjQUpo2AuZu8ebo1TQ/Muhammad%20Fauzul%20Hanif.jpg?psid=1&width=837&height=837&cropMode=center"*/}
        {/*/>*/}

        {/*<Center p={[2, 6, 10]}>*/}
        <Text align="center">
          I am a front-end developer with a background in Multimedia major.
          Experience in developing web-based client-side sites with JavaScript.
          Have good communication skills, am skilled in teamwork, and love to
          learn new things.
        </Text>
        {/*</Center>*/}
      </Flex>
    </Box>
  );
};
