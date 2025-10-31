import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load all major sections
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Exp = lazy(() => import("./components/Exp"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Footer = lazy(() => import("./components/Footer"));

// Optional loader component
const Loader = () => (
  <div className="flex items-center justify-center h-screen text-white text-lg">
    Loading...
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div className="relative z-0 bg-primary">
          <div>
            <Navbar />
            <Hero />
          </div>

          <About />
          <Exp />
          <Tech />
          <Works />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>

          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
