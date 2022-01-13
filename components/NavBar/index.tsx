import NextLink from "next/link";

import {
  HStack,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  Icon,
  Grid,
  Link,
} from "@chakra-ui/react";
import { Menu as MenuIcon, X as XIcon } from "@styled-icons/boxicons-regular";
import { IconList } from "./iconList";
import { NavList } from "./NavList";

export const NavBar = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      zIndex={1}
      px={[2, 6, 10]}
      py={12}
      justify="space-between"
      pos="sticky"
      top={0}
      bgColor="gray.50"
    >
      <HStack>
        {IconList.map(({ name, href }, id) => (
          <NextLink href={href} key={id} passHref>
            <Link isExternal>
              <Button
                p={0}
                bgColor="gray.50"
                _hover={{ color: "gray.50", bgColor: "gray.900" }}
                _focus={{ boxShadow: "none" }}
              >
                <Icon as={name} w={6} h={6} />
              </Button>
            </Link>
          </NextLink>
        ))}
      </HStack>

      <HStack justify="center">
        <NextLink href="/">
          <Heading fontSize="xl" fontWeight="medium" cursor="pointer">
            Fauzul
          </Heading>
        </NextLink>
      </HStack>

      <HStack justify="end">
        <HStack
          spacing={1}
          mr={1}
          color="brand.500"
          display={{ base: "none", md: "inline-flex" }}
        >
          {NavList.map(({ href, title }, id) => {
            return (
              <NextLink href={`#${href}`} key={id}>
                <Button variant="ghost" _focus={{ boxShadow: "none" }}>
                  {title}
                </Button>
              </NextLink>
            );
          })}
        </HStack>

        <VStack
          _focus={{ boxShadow: "none" }}
          display={{ base: "inline-flex", md: "none" }}
        >
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  _focus={{ boxShadow: "none" }}
                >
                  {isOpen ? <XIcon /> : <MenuIcon />}
                </MenuButton>

                <MenuList>
                  {NavList.map(({ href, title }, id) => {
                    return (
                      <NextLink href={`#${href}`} key={id}>
                        <MenuItem>{title}</MenuItem>
                      </NextLink>
                    );
                  })}
                </MenuList>
              </>
            )}
          </Menu>
        </VStack>
      </HStack>
    </Grid>
  );
};
