import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" activeStyle={{ color: "red" }}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" activeStyle={{ color: "red" }}>
              About Me
            </Link>
          </li>

          <li>
            <Link to="/contact" activeStyle={{ color: "red" }}>
              Contact Me
            </Link>
          </li>

          <li>
            <Link to="/blog" activeStyle={{ color: "red" }}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
