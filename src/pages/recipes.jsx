import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../Layout/Layout"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
