import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <Link to="/" activeStyle={{ color: "red" }}>
        Home
      </Link>
      <br />
      <Link to="/about" activeStyle={{ color: "red" }}>
        About Me
      </Link>
      <br />
      <Link to="/contact" activeStyle={{ color: "red" }}>
        Contact Me
      </Link>
      <br />
      <Link to="/blog" activeStyle={{ color: "red" }}>
        Blog
      </Link>
      <br />
    </div>
  )
}

export default Header
