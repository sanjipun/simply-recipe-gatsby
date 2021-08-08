import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/Seo"
import Layout from "../Layout/Layout"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="main page"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth   "
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Sanji's Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
