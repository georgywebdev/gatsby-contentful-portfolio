import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Helmet } from "react-helmet";
import { BlogCard } from "../components/BlogCard";

import { Box } from "rebass";
import "../styles/style.scss";
import { Layout } from "../components/Layout";

interface HomeProps {
  data: {
    blogs: {
      edges: {
        node: {
          id: string;
          title: string;
          slug: string;
          preview: {
            id: string;
            fluid: FluidObject;
          };
        };
      }[];
    };
  };
}

export const query = graphql`
  query {
    blogs: allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          preview {
            id
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data: { blogs } }: HomeProps) => {
  return (
    <Layout>
      <Helmet title="Home" />
      <Box
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {blogs.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;
