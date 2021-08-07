import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {nodes.map((image, i) => {
        const img = getImage(image)
        return (
          <article key={i} className="item" style={{ marginRight: "1rem" }}>
            {image.childImageSharp?.gatsbyImageData && (
              <>
                <GatsbyImage
                  image={img}
                  alt={image.name}
                  className="gallery-img"
                  style={{ borderRadius: 10 }}
                />
                <p>{image.name}</p>
              </>
            )}
          </article>
        )
      })}
    </div>
  )
}

export default Gallery
