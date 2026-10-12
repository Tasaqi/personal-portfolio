import { Navbar, Hero, Highlights, CaseStudy, Projects, Experience, Consultancy } from "./components";

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
    </main>
  </div>
);

export default App;
