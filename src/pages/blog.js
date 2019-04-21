import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
            html
            excerpt
          }
        }
      }
    }
  `)

  const renderList = data.allMarkdownRemark.edges.map(post => (
    <div>
      <h3>
        {post.node.frontmatter.date} {post.node.frontmatter.title}
      </h3>
      <p key={post.node.frontmatter.title}>{post.node.excerpt}</p>
    </div>
  ))
  console.log(data)
  return (
    <Layout>
      <h1>Blog</h1>
      {renderList}
    </Layout>
  )
}

export default BlogPage
