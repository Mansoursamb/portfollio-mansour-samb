import "./Home.css";
import Nav from "../components/Nav.jsx";
import About from "../components/About/About.jsx";
import Hero from "../components/Hero.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Contact from "../components/Contacts/Contacts.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Skills } from "../components/Skills/Skills.jsx";

function Home() {
  return (
    <main className="home">
      <Nav />
      <About />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
