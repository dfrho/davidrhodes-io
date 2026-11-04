import { Contact } from "./components/Contact.tsx";
import { Credentials } from "./components/Credentials.tsx";
import { Experience } from "./components/Experience.tsx";
import { Expertise } from "./components/Expertise.tsx";
import { Hero } from "./components/Hero.tsx";
import { Metrics } from "./components/Metrics.tsx";
import { Projects } from "./components/Projects.tsx";
import { SiteFooter } from "./components/SiteFooter.tsx";
import { SiteHeader } from "./components/SiteHeader.tsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Expertise />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
