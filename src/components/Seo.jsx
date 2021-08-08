import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: description ? description : site.siteMetaData.description,
        },
      ]}
    ></Helmet>
  )
}

export default Seo
