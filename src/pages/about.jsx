import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../Layout/Layout"

const About = () => {
  return (
    <Layout>
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
      </main>
    </Layout>
  )
}

export default About
