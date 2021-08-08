import React from "react"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/Seo"
import Layout from "../Layout/Layout"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
