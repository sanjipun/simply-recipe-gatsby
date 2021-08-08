import React from "react"
import Seo from "../components/SEO"
import Layout from "../Layout/Layout"

const Error = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h1>Page Not Found</h1>
        </section>
      </main>
    </Layout>
  )
}

export default Error
