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
  Hobbies
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
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <AdsPause />
        <Values />
        <Hobbies />
        <Hobbies />

        <div className="relative z-0 bg-primary ">
          {/* <div className="bg-primary"> */}
            {/* <Contact />
            <StarsCanvas /> */}
          {/* </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
