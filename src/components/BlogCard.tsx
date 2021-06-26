import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { Box, Link, Text } from "rebass";

type BlogCardProps = {
  blog: {
    id: string;
    title: string;
    slug: string;
    preview: {
      id: string;
      fluid: FluidObject;
    };
  };
};

export const BlogCard = ({ blog: { preview, title, slug } }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${slug}`} sx={{ textDecoration: "none" }}>
      <Img fluid={preview.fluid} loading="lazy" />

      <Box bg="black" color="white" py={3} px={2}>
        <Text p={2} fontSize={[2, 3, 4]} fontWeight="bold">
          {title}
        </Text>
      </Box>
    </Link>
  );
};
