import React from "react"
import moment from "moment"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  return (
    <div>
      <p>
        Copyright ©{moment().year()} {author}
      </p>
    </div>
  )
}

export default Footer
