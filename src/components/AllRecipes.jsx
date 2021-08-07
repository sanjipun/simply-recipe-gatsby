import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const query = graphql`
  {
    allContentfulRecipe(sort: { order: ASC, fields: title }) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          id
        }
        content {
          tags
        }
      }
    }
  }
`
const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  console.log(recipes)
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
