import { graphql } from "gatsby"
import React from "react"
import RecipesList from "../components/RecipesList"
import Layout from "../Layout/Layout"

const TagTemplate = props => {
  const recipes = props.data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <h2>{props.pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default TagTemplate
