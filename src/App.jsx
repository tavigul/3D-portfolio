import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
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
        <Feedbacks />
        <div className="relative z-0">
          {/* <Contact />
            <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
