import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

import { BlogBody } from "../../components/BlogBody";
import { Layout } from "../../components/Layout";
import "../../styles/style.scss";
import { Helmet } from "react-helmet";

interface TemplateProps {
  data: {
    blog: {
      id: string;
      title: string;
      slug: string;
      publishedAt: string;
      body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      preview: {
        fluid: FluidObject;
      };
    };
  };
}

const BlogTemplate = ({ data: { blog } }: TemplateProps) => {
  return (
    <Layout>
      <Helmet title={blog.title}>
        <meta
          charSet="utf-8"
          name="description"
          content="Blog post by an illustrator."
        />
      </Helmet>

      <BlogBody content={blog.body} />
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishedAt(formatString: "MMM D YYYY")
      preview {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`;
