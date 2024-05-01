import React from "react"
import Header from "./components/header"
import Caurosel from "./components/caurosel"
import AboutMe from "./components/AboutMe"
import Experience from "./screens/experience"
import Stack from "./components/stack"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <Header/>
      <AboutMe/>
      <Caurosel/>
      <Experience/>
      <Stack/>
      <Footer/>
    </>
  )
}

export default App
