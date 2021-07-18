import React from "react";
import { Box, Flex, Link } from "rebass";

type NavProps = {
  path?: string;
};

const NavBar = ({ path }: NavProps) => {
  return (
    <Flex bg="black" alignItems="center">
      <Link
        href="/"
        p={2}
        fontSize={[3, 4, 5]}
        fontWeight="bold"
        sx={{ textDecoration: "none" }}
        color="white"
      >
        Nikitos
      </Link>
      <Box mx="auto" />
      <Link
        href="/"
        fontSize={[1, 2, 3]}
        color="white"
        sx={{
          textDecoration: path === "/" ? "underline" : "none",
        }}
        mr={3}
      >
        Projects
      </Link>
      <Link
        href="/about"
        fontSize={[1, 2, 3]}
        color="white"
        sx={{ textDecoration: path === "/about" ? "underline" : "none" }}
        mr={3}
      >
        About
      </Link>
    </Flex>
  );
};

export default NavBar;
