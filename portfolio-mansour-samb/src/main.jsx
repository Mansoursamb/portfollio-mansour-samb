import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Routes and page components are rendered inside App
// No router needed for single-page anchor navigation
import App from "./App";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Home />
    <App />
    <Footer />
  </>
);
