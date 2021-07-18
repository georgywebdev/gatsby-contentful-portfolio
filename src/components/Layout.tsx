import React from "react";
import { Box, Flex } from "rebass";
import Footer from "./Footer";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
  path?: string;
};

export const Layout = ({ children, path }: LayoutProps) => {
  return (
    <Flex
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar path={path} />
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
