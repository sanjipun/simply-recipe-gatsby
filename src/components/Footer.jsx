import React from "react"

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="page-footer">
      <p>
        &copy; {date} <span>Sanji's Recipes</span>
      </p>
    </footer>
  )
}

export default Footer
