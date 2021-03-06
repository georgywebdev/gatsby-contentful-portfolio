import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Helmet } from "react-helmet";
import { BlogCard } from "../components/BlogCard";

import { Box } from "rebass";
import { Layout } from "../components/Layout";
import { PageProps } from "gatsby";
import "../styles/style.scss";

interface HomeProps extends PageProps {
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
    blogs: allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
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

const IndexPage = ({ data: { blogs }, location }: HomeProps) => {
  return (
    <Layout path={location.pathname}>
      <Helmet title="Home">
        <meta
          charSet="utf-8"
          name="description"
          content="Blog posts by an illustrator."
        />
      </Helmet>
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
