import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "../styles/index.scss"

const Layout = props => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
