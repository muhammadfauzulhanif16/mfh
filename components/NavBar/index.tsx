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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavList } from "./NavList";

export const NavBar = () => {
  return (
    <HStack
      zIndex={1}
      py={4}
      justify="space-between"
      px={[2, 6, 10]}
      pos="sticky"
      top={0}
      bgColor="white"
    >
      <HStack>
        <NextLink href="/">
          <Heading fontSize="xl" fontWeight="medium" cursor="pointer">
            Fauzul
          </Heading>
        </NextLink>
      </HStack>

      <HStack>
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
                  {isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
    </HStack>
  );
};
