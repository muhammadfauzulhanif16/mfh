import { Box, Heading, Divider, SimpleGrid } from "@chakra-ui/react";
import { Card } from "../common/Card";
import { PortfolioList } from "./PortfolioList";

export const Portfolio = () => {
  return (
    <Box mx={[2, 6, 10]} mb={[2, 6, 10]} id="portfolio">
      <Heading textAlign="center" size="md" mb={[2, 6, 10]}>
        Portfolio
        <Divider height="1rem" />
      </Heading>

      <SimpleGrid columns={[2, 2, 3, 4]} spacing={[2, 6, 10]}>
        {PortfolioList.map(({ alt, href }, id) => {
          return <Card alt={alt} href={href} key={id} />;
        })}
      </SimpleGrid>
    </Box>
  );
};
