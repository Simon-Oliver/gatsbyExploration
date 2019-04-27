import React from "react"
import { Helmet } from "react-helmet"

import { useStaticQuery, gatsby } from "gatsby"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`} />
}

export default Head
