import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import HeaderNav from "./components/layout/HeaderNav";
import Footer from "./components/layout/Footer";
import MedicineCard from "./components/card/MedicineCard";
import MedicineCardDetail from "./components/card/MedicineCardDetail"; // Import the new component

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/medications" element={<MedicineCard />} />
        <Route path="/medications/:term" element={<MedicineCardDetail />} /> {/* Add the new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
