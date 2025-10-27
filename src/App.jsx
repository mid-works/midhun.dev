import { BrowserRouter } from "react-router-dom"
import {About , Contact, Hero, Navbar, Tech, Works , Exp, StarsCanvas, Footer} from "./components"

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  ) 
}

export default App