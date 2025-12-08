import "./index.css";

import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Contact from "./components/Contacts/Contacts.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <main className="home">
      <About />
      <Hero />
      <Portfolio />
      <Courses />

      <Contact />
    </main>
  );
}

export default App;
