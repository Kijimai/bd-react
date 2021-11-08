import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./components/routes/Main"
import About from "./components/routes/About"
import Hours from "./components/routes/Hours"
import Footer from "./components/routes/Footer"
import Order from "./components/routes/Order"
import Contact from "./components/routes/Contact"
//navbar
//main items
//- featured
//-
//footer with links
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/hours" element={<Hours />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
