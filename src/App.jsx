import { useState } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/layout/Home'
import HeaderNav from "./components/layout/HeaderNav"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <>
      <div className="body">
        <BrowserRouter>
          {/* <ScrollToTop> */}
            <HeaderNav />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          {/* </ScrollToTop> */}
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
