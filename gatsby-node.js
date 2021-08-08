const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slug = slugify(tag, { lower: true })
      createPage({
        path: `${slug}`,
        component: path.resolve(`src/templates/tag-template.jsx`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
