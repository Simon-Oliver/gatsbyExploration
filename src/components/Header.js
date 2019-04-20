import React from "react"
import { Link } from "gatsby"
// import "../styles/header.module.scss"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={headerStyles.container}>
          <li>
            <Link
              className={headerStyles.link}
              to="/"
              activeStyle={{ color: "red" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.link}
              to="/about"
              activeStyle={{ color: "red" }}
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.link}
              to="/contact"
              activeStyle={{ color: "red" }}
            >
              Contact Me
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.link}
              to="/blog"
              activeStyle={{ color: "red" }}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
