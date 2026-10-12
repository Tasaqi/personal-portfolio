import { Navbar, Hero, Highlights, CaseStudy, Projects } from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
      <CaseStudy />
      <Projects />
    </main>
  </div>
);

export default App;
