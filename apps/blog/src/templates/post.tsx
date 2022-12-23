import React from "react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Seo, Utterances } from "~/components/Common";
import { AppLayout } from "~/components/Layout";
import "../styles/templates/post.scss";

const Post = ({ data }: PageProps<QueryResult>) => {
  const {
    html,
    fields,
    frontmatter: { date, description, thumbnail, title }
  } = data.markdownRemark;
  
  const fallbackThumbnail =
    thumbnail?.childImageSharp.gatsbyImageData.images.fallback;

  return (
    <AppLayout>
      <Seo
        title={title}
        description={description}
        url={`https://blog.chanhyuk.com${fields.slug}`}
        thumbnail={
          thumbnail
            ? `https://blog.chanhyuk.com${thumbnail.publicURL}`
            : undefined
        }
      />
      <article
        className="blog-post-wrapper"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="title" itemProp="headline">
            {title}
          </h1>
          <p className="published-at">{date}</p>

          {thumbnail && (
            <img className="thumbnail" alt="" {...fallbackThumbnail} />
          )}
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
        <Utterances />
      </article>
    </AppLayout>
  );
};

interface QueryResult {
  markdownRemark: {
    html: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      description: string;
      thumbnail: {
        publicURL: string;
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
  };
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일")
        description
        thumbnail {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Post;
