const path = require(`path`);

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    {
      blogs: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.slug}`,
        component: path.resolve(`./src/templates/Blog/post.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
