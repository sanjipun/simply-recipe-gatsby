import { graphql } from "gatsby"
import React from "react"
import Gallery from "../components/Gallery"
import Layout from "../Layout/Layout"

const Testing = props => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      siteMetadata {
        author
        complexData {
          name
          age
        }
        description
        simpleData
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default Testing
