import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  const renderList = data.allMarkdownRemark.edges.map(post => (
    <Link
      to={`/blog/${post.node.fields.slug}`}
      key={post.node.frontmatter.title}
    >
      <h4>
        {post.node.frontmatter.date} {post.node.frontmatter.title}
      </h4>
      <p key={post.node.frontmatter.title}>{post.node.excerpt}</p>
    </Link>
  ))
  return (
    <Layout>
      <h1>Blog</h1>
      {renderList}
    </Layout>
  )
}

export default BlogPage
