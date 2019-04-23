import React from "react"
import moment from "moment"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.scss"

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
    <footer className={footerStyles.footer}>
      <p>
        Copyright ©{moment().year()} {author}
      </p>
    </footer>
  )
}

export default Footer
