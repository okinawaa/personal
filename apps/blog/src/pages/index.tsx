import React from "react";
import { graphql, PageProps } from "gatsby";
import { AppLayout } from "~/components/Layout";
import { PostList } from "~/components/Main";
import { Seo } from "~/components/Common";
import "../styles/pages/index.scss";

const Main = ({ data }: PageProps<QueryResult>) => {
  const posts = React.useMemo<Common.Post[]>(() => {
    return data.allMarkdownRemark.nodes.map(node => ({
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      thumbnail:
        node.frontmatter.thumbnail?.childImageSharp.gatsbyImageData.images
          .fallback ?? null,
      url: node.fields.slug,
      publishedAt: node.frontmatter.date
    }));
  }, [data]);

  return (
    <AppLayout>
      <Seo title="박찬혁 블로그" />
      <PostList posts={posts} />
    </AppLayout>
  );
};

interface QueryResult {
  allMarkdownRemark: {
    nodes: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
        description: string;
        thumbnail: {
          childImageSharp: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: string;
                  srcSet: string;
                  sizes: string;
                };
              };
            };
          };
        } | null;
      };
    }[];
  };
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY년 M월 D일")
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default Main;
