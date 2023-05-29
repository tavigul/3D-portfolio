import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Values,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  AdsPause,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
     
      <div className="relative z-0 " style={{ background: "#c74f80" }}>
      <section id="bg">
        <div className="top"></div>
        <section id="transitions"></section>
        <div className="bottom"></div>
      </section>

        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
          <Navbar />
          <Hero />

        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <AdsPause />
        <Values />
        <div className="relative z-0">
          {/* <Contact />
            <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
