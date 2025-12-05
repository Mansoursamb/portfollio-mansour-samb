import "./index.css";

import Portfolio from "./components/Portfolio/Portfolio.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import Contact from "./components/Contacts/Contacts.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <main className="home">
      <About />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
