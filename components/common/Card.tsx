import { Heading, Image, Link } from "@chakra-ui/react";

interface Props {
  alt: string;
  href: string;
}

export const Card = (props: Props) => {
  const { alt, href } = props;

  return (
    <Link
      cursor="pointer"
      href={href}
      isExternal
      pos="relative"
      _focus={{ shadow: "none" }}
    >
      <Image
        alt={alt}
        src={`img/Portfolio/${alt}.png`}
        borderRadius={[8, 16]}
      />

      <Heading
        p={2}
        width="full"
        pos="absolute"
        bottom={0}
        color="white"
        size="md"
        bg="rgba(0, 0, 0, 0.1)"
        borderBottomRadius={[8, 16]}
      >
        {alt}
      </Heading>
    </Link>
  );
};
