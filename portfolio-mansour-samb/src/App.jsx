import { StrictMode } from "react";
import "./index.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
