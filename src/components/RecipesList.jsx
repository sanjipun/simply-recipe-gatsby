import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const imagePath = image.gatsbyImageData
        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage image={imagePath} alt={title} className="recipe-img" />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
