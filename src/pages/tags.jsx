import { graphql, Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import Seo from "../components/Seo"
import Layout from "../Layout/Layout"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <Seo title="Tags" description="Hello World" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, i) => {
            const slug = slugify(tag[0], { lower: true })
            return (
              <Link to={`/${slug}`} key={i} className="tag">
                <h5>{tag[0]}</h5>
                <p>{tag[1]}recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
