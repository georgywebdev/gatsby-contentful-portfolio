import React from "react";
import { Box, Flex, Link } from "rebass";

const NavBar = () => {
  return (
    <Flex p={2} bg="black" alignItems="center">
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
        href="#!"
        fontSize={[1, 2, 3]}
        color="white"
        sx={{ textDecoration: "none" }}
      >
        Some link
      </Link>
    </Flex>
  );
};

export default NavBar;
