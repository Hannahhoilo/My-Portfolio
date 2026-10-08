import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  /*Hvis noen åpner en lenke som hannahhoilo.no/#prosjekter, scroll dit når siden er lastet.
  Nettleseren prøver selv, men rekker det ikke fordi React bygger siden etter at den er lastet.*/
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);
  return (
    <Layout>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
