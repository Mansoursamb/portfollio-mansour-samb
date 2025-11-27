import "./Home.css";
import Nav from "../components/Nav.jsx";
import About from "../components/About/About.jsx";
import Hero from "../components/Hero.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Contact from "../components/Contacts/Contacts.jsx";

function Home() {
  return (
    <main className="home">
      <Nav />
      <About />
      <Hero />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Home;
