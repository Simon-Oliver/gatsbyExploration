import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            excerpt
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  const renderList = data.allContentfulBlogPost.edges.map(edge => (
    <li className={blogStyles.post} key={edge.node.title}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <h3>{edge.node.publishedDate}</h3>
        <p>{edge.node.excerpt}</p>
      </Link>
    </li>
  ))
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{renderList}</ol>
    </Layout>
  )
}

export default BlogPage

// ---------- Markdown Query

// import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import Layout from "../components/Layout"
// import blogStyles from "./blog.module.scss"

// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//             excerpt
//           }
//         }
//       }
//     }
//   `)

//   const renderList = data.allMarkdownRemark.edges.map(post => (
//     <li className={blogStyles.post}>
//       <Link
//         to={`/blog/${post.node.fields.slug}`}
//         key={post.node.frontmatter.title}
//       >
//         <h2>{post.node.frontmatter.title}</h2>
//         <h3>{post.node.frontmatter.date}</h3>
//         <p key={post.node.frontmatter.title}>{post.node.excerpt}</p>
//       </Link>
//     </li>
//   ))
//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <ol className={blogStyles.posts}>{renderList}</ol>
//     </Layout>
//   )
// }

// export default BlogPage
