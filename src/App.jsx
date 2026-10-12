import {
  Navbar,
  Hero,
  Highlights,
  CaseStudy,
  Projects,
  Experience,
  Consultancy,
  Skills,
  Contact,
} from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
      <CaseStudy />
      <Projects />
      <Experience />
      <Consultancy />
      <Skills />
    </main>
    <Contact />
  </div>
);

export default App;
