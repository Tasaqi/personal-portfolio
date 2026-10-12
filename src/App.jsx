import { Navbar, Hero, Highlights } from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
    </main>
  </div>
);

export default App;
