import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, i) => {
          const slug = slugify(tag[0], { lower: true })
          return (
            <Link key={i} to={`/${slug}`}>
              {tag[0]} ({tag[1]})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
