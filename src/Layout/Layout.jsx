import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "normalize.css"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
