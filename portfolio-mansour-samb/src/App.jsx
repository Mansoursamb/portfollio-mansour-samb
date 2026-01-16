import "./index.css";
import { useEffect, useState } from "react";

import Hero from "./components/Hero.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Contact from "./components/Contact/Contact.jsx";

import NotFound from "./pages/NotFound.jsx";

function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "home");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // 👉 Si le hash est invalide → 404
  if (
    route !== "home" &&
    route !== "about" &&
    route !== "portfolio" &&
    route !== "courses" &&
    route !== "contact" &&
    route !== ""
  ) {
    return <NotFound />;
  }

  // 👉 Sinon on affiche TOUT (one‑page)
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Courses />
      <Contact />
    </main>
  );
}

export default App;
