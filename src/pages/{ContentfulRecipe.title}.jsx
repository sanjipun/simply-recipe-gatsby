import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../Layout/Layout"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"
import slugify from "slugify"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    prepTime,
    cookTime,
    servings,
    description: { description },
    content,
    image,
  } = data.contentfulRecipe
  const imagePath = getImage(image)
  const { tags, ingredients, tools, instructions } = content
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage image={imagePath} alt="title" className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime}min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime}min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings} people</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :{" "}
                {tags.map((tag, i) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/${slug}`} key={i}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((instruction, i) => {
                return (
                  <div className="single-instruction" key={i}>
                    <header>
                      <p>Step: {i + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, i) => {
                  return (
                    <p key={i} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((item, i) => {
                  return (
                    <p key={i} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
          <h2>{title}</h2>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      title
      prepTime
      cookTime
      servings
      description {
        description
      }
      content {
        ingredients
        tags
        tools
        instructions
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
export default RecipeTemplate
