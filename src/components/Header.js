import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/"
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              to="/about"
              activeClassName={headerStyles.activeNavItem}
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeClassName={headerStyles.activeNavItem}
            >
              Contact Me
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
              partiallyActive
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
