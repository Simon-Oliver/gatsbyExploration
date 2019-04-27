import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Whoooops.... Something went wrong!</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
