import { useState } from "react";
import Navbar from "../components/Navbar";
import GlobalCanvas from "../components/GlobalCanvas";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import HumanSide from "../components/HumanSide";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Single fixed circuit-board canvas for the entire site */}
      <GlobalCanvas />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <HumanSide />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;