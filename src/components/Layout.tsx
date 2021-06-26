import React from "react";
import { Box, Flex } from "rebass";
import Footer from "./Footex";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Box
        sx={{
          flex: "1 1 auto",
          maxWidth: "1024px",
          width: "100%",
          mx: "auto",
          p: 4,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
