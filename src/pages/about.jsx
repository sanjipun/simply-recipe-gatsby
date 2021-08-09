import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import RecipesList from "../components/RecipesList"
import Seo from "../components/Seo"
import Layout from "../Layout/Layout"

const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title="About" description="Hello World" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              culpa, alias nihil ut deserunt exercitationem!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              sit quos omnis tempore a ipsum exercitationem velit vitae? Nobis,
              soluta.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at these awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          id
        }
        content {
          tags
        }
      }
    }
  }
`
export default About
