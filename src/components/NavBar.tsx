import React from "react";
import { Box, Flex, Link, Text } from "rebass";

const NavBar = () => {
  return (
    <Flex p={2} color="white" bg="black" alignItems="center">
      <Text p={2} fontSize={[3, 4, 5]} fontWeight="bold">
        Nikitos
      </Text>
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
