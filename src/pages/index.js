import React from "react"
import Layout from "../components/Layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Simon!</h2>
      <a href="https://www.google.com" target="blank">
        Go to Google
      </a>
    </Layout>
  )
}

export default IndexPage
