import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/layout/Home"
import HeaderNav from "./components/layout/HeaderNav"
import Footer from "./components/layout/Footer"
import MedicineCard from "./components/card/MedicineCard"
import MedicineCardDetail from "./components/card/MedicineCardDetail"
import Info from "./components/card/Info"

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/medications" element={<MedicineCard />} />
        <Route path="/medications/:term" element={<MedicineCardDetail />} />
      </Routes>
      <Footer sx={{  position: "fixed",  width: "100%",  bottom: "0"}}/>
    </Router>
  )
}

export default App
