import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "rebass";

import { Layout } from "../components/Layout";
import { PageProps } from "gatsby";

const About = ({ location }: PageProps) => {
  return (
    <Layout path={location.pathname}>
      <Helmet title="About">
        <meta charSet="utf-8" name="description" content="About page." />
      </Helmet>
      <Box>
        <div>About page</div>
      </Box>
    </Layout>
  );
};

export default About;
