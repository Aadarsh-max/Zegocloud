import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

import Home from "./pages/Home";
import Call from "./pages/Call";
import About from './pages/About'


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call" element={<Call />} />
        <Route path="/about" element={<About />} />
    
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
