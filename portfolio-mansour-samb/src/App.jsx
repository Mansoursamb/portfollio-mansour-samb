import { StrictMode } from "react";
import "./index.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contacts/Contacts.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
